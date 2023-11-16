const WizardScene = require("telegraf/scenes/wizard");
const escapeHTML = require("escape-html");
const { Markup } = require("telegraf");

const { Request } = require("../../database");

const scene = new WizardScene(
    "request_create",
    async (ctx) => {
        try {
            await ctx.scene.reply("Какой опыт работы?", {
                parse_mode: "HTML",
            });

            ctx.scene.state.data = {};

            return ctx.wizard.next();
        } catch (err) {
            await require("../../../utils/sendError")(err)
            ctx.replyOrEdit("❌ request - step1").catch((err) => err);
            return ctx.scene.leave();
        }
    },
    async (ctx) => {
        try {
            if (!ctx.message?.text) return ctx.wizard.prevStep();

            ctx.scene.state.data.step1 = escapeHTML(
                ctx.message.text.replace(/\s+/g, " ").substr(0, 600)
            );

            return ctx.wizard.nextStep();
        } catch (err) {
            await require("../../../utils/sendError")(err)
            ctx.replyOrEdit("❌ request - step2").catch((err) => err);
            return ctx.scene.leave();
        }
    },
    async (ctx) => {
        try {
            await ctx.scene.reply("Сколько времени готовы уделять?", {
                parse_mode: "HTML",
            });

            return ctx.wizard.next();
        } catch (err) {
            await require("../../../utils/sendError")(err)
            ctx.replyOrEdit("❌ request - step3").catch((err) => err);
            return ctx.scene.leave();
        }
    },
    async (ctx) => {
        try {
            if (!ctx.message?.text) return ctx.wizard.prevStep();

            ctx.scene.state.data.step2 = escapeHTML(
                ctx.message.text.replace(/\s+/g, " ").substr(0, 600)
            );

            return ctx.wizard.nextStep();
        } catch (err) {
            await require("../../../utils/sendError")(err)
            ctx.replyOrEdit("❌ request - step4").catch((err) => err);
            return ctx.scene.leave();
        }
    },
    async (ctx) => {
        try {
            await ctx.scene.reply("Укажите, где вы увидели рекламу.", {
                parse_mode: "HTML",
            });
            return ctx.wizard.next();
        } catch (err) {
            await require("../../../utils/sendError")(err)
            ctx.replyOrEdit("❌ request - step5").catch((err) => err);
            return ctx.scene.leave();
        }
    },
    async (ctx) => {
        try {
            if (!ctx.message?.text) return ctx.wizard.prevStep();

            ctx.scene.state.data.step3 = escapeHTML(
                ctx.message.text.replace(/\s+/g, " ").substr(0, 600)
            );

            const request = await Request.create({
                userId: ctx.state.worker.id,
                ...ctx.scene.state.data,
                status: 0
            });

            const message = [
                `ℹ️ Новая заявка от пользователя <b><a href="tg://user?id=${ctx.from.id}">${ctx.state.worker.username}</a></b>`,
                "",
                "🚦 Статус: <b>На рассмотрении ⏳</b>",
                "",
                `Какой опыт работы?: <b>${request.step1}</b>`,
                `Сколько времени готовы уделять?: <b>${request.step2}</b>`,
                `Укажите, где вы увидели рекламу.: <b>${request.step3}</b>`
            ]

            ctx.telegram.sendMessage(
                process.env.REQUEST_CHAT_ID, message.join("\r\n"), {
                parse_mode: "HTML",
                reply_markup: Markup.inlineKeyboard([
                    [
                        Markup.callbackButton(
                            "✅ Принять",
                            `admin#request#${request.id}#accept`
                        ),
                        Markup.callbackButton(
                            "❌ Отклонить",
                            `admin#request#${request.id}#decline`
                        ),
                    ],
                ]),
            });

            await ctx.scene.reply("✳️ <b>Заявка отправлена на расмотрение, ожидайте.</b>", {
                parse_mode: "HTML",
            });

        } catch (err) {
            await require("../../../utils/sendError")(err)
            ctx.replyOrEdit("❌ Ошибка").catch((err) => err);
        }
        return ctx.scene.leave();
    }
);

module.exports = scene;