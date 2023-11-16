const WizardScene = require("telegraf/scenes/wizard");
const { Worker } = require("worker_threads");
const { Markup } = require("telegraf");

const sendAdminMenu = require("../../messages/admin/sendAdminMenu.message")

const scene = new WizardScene(
    "admin#mail#scene",
    async (ctx) => {
        try {
            await ctx.scene.reply("📤 Отправьте сообщение для рассылки", {
                reply_markup: Markup.inlineKeyboard([
                    [Markup.callbackButton("Отменить", "cancel")],
                ]),
            });
            return ctx.wizard.next();
        } catch (err) {
            await require("../../../utils/sendError")(err)
            ctx.replyOrEdit("❌ Ошибка").catch((err) => err);
            return ctx.scene.leave();
        }
    },
    async (ctx) => {
        try {
            await ctx.reply("⏳ Рассылка отправляется...").catch((err) => err);
            const worker = new Worker(
                require("path").join(__dirname, "../../../utils/sendMail.js"),
                {
                    workerData: {
                        chat_id: ctx.chat.id,
                        message: ctx.message,
                    },
                }
            );
            worker.on("message", () => worker.terminate());
        } catch (err) {
            await require("../../../utils/sendError")(err)
            ctx.replyOrEdit("❌ Ошибка").catch((err) => err);
        }
        return ctx.scene.leave();
    }
);

scene.leave(sendAdminMenu);

module.exports = scene;