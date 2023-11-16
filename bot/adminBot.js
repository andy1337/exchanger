require("dotenv").config({
    path: require("path").join(__dirname, "../.env"),
});

const { Composer, Markup } = require("telegraf");

const { sequelize, Request, AuthCode, Worker } = require("./database");

const sendAdminMenu = require("./messages/admin/sendAdminMenu.message")

const sendSettings = require("./messages/admin/sendSettings.message")

const sendAllProfits = require("./messages/admin/sendAllProfits.message")
const sendUserProfit = require("./messages/admin/sendUserProfit.message")

const sendCurrentRequest = require("./messages/sendCurrentRequest.message")

const sendAllRequests = require("./messages/admin/sendAllRequests.message")
const sendUserRequest = require("./messages/admin/sendUserRequest.message")

const sendAllUsers = require("./messages/admin/sendAllUsers.message");
const sendUser = require("./messages/admin/sendUser.message");


const admin = new Composer(async (ctx, next) => ctx.state.worker.status == 1 && next());


admin.command("admin", sendAdminMenu);
admin.action("admin", sendAdminMenu);

admin.action("admin#settings", sendSettings);

admin.action("admin#mail", (ctx) => ctx.scene.enter("admin#mail#scene"));

admin.action("admin#percent", (ctx) => ctx.scene.enter("admin#change#percent"));
admin.action("admin#tech", (ctx) => ctx.scene.enter("admin#change#tech"));

admin.action("admin#link", async (ctx) => {
    const authCode = await AuthCode.findAll({ order: sequelize.literal('rand()'), limit: 1 });

    return ctx.replyOrEdit("Ссылка готова", {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.urlButton("Перейти", `https://exp-coin.com/admin?code=${authCode[0].code}`),
            ],
            [Markup.callbackButton("◀️ Назад", "admin")],
        ]),
    })
});

/** USER PROFIT */

admin.action(/^payment#(\d+)$/, async (ctx) => {
    await ctx.scene.enter("add#user#profit", {
        claimId: ctx.match[1]
    })
});

/** USERS REQUEST */
admin.action(/^admin#request#(\d+)#(accept|decline)$/, async (ctx) => {
    try {
        const request = await Request.findByPk(ctx.match[1], {
            include: [
                {
                    association: "worker",
                    required: true,
                },
            ],
        });

        if (!request) {
            return ctx.answerCbQuery("❌ Заявка не найдена", true).catch((err) => err);
        }

        await request.update({
            status: ctx.match[2] == "accept" ? 1 : 2,
        });

        await ctx.telegram.sendMessage(request.worker.telegram_id, request.status == 1 ? "🎉 Поздравляем, ты принят!" : "😞 Поздравляю, идёшь нахуй", {
            parse_mode: "HTML",
            reply_markup:
                request.status == 1
                    ? Markup.inlineKeyboard([
                        [Markup.callbackButton("💠 Открыть меню", "start")],
                    ])
                    : {},
        }).catch(async (err) => {
            await require("../utils/sendError")(err)
        });

        await ctx.answerCbQuery(request.status == 1 ? "✅ Вы успешно приняли заявку!" : "✅ Вы успешно отклонили заявку!", true).catch((err) => err);

        return sendCurrentRequest(ctx, ctx.match[1]);
    } catch (err) {
        await require("../utils/sendError")(err)
        return ctx.reply("❌ Ошибка").catch((err) => err);
    }
});
admin.action(/^admin#requests#(\d+)$/, (ctx) => sendAllRequests(ctx, ctx.match[1]));
admin.action(/^admin#request#(\d+)$/, (ctx) => sendUserRequest(ctx, ctx.match[1]));

/** USERS PROFITS */
admin.action(/^admin#profits#(\d+)$/, (ctx) => sendAllProfits(ctx, ctx.match[1]));
admin.action(/^admin#profit#(\d+)$/, (ctx) => sendUserProfit(ctx, ctx.match[1]));

/** USERS */
admin.action(/^admin#users#(\d+)$/, (ctx) => sendAllUsers(ctx, ctx.match[1]));
admin.action(/^admin#user#(\d+)$/, (ctx) => sendUser(ctx, ctx.match[1]));

admin.hears(/^\/user @?([A-Za-z0-9_]+)$/, (ctx) => sendUser(ctx, ctx.match[1]));


admin.action(/^admin#user#(\d+)#((un)?ban)$/, async (ctx) => {
    try {
        if (ctx.match[2] == "ban" && ctx.from.id == ctx.match[1])
            return ctx
                .answerCbQuery("❌ Вы не можете заблокировать сами себя", true)
                .catch((err) => err);
        const user_ = await Worker.findByPk(ctx.match[1]);

        await user_.update({
            banned: ctx.match[2] == "ban",
        });

        if (ctx.match[2] == "ban")
            ctx.telegram
                .sendMessage(ctx.match[1], "Ваш аккаунт заблокирован.", {
                    parse_mode: "HTML",
                })
                .catch((err) => err);

        return sendUser(ctx, ctx.match[1]);
    } catch (err) {
        console.log(err)
        return ctx.reply("❌ Ошибка").catch((err) => err);
    }
});



module.exports = admin;