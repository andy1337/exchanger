const WizardScene = require("telegraf/scenes/wizard");

const { Worker } = require("../../database");

const scene = new WizardScene(
    "change#user#usdt",
    async (ctx) => {
        try {
            await ctx.reply(`<i>📝 Введите USDT-адрес:</i>`, {
                parse_mode: "HTML",
            });
            
            return ctx.wizard.next();
        } catch (err) {
            ctx.replyOrEdit("❌ Ошибка ").catch((err) => err);
            return ctx.scene.leave();
        }
    },
    async (ctx) => {
        try {
            if (!ctx.message.text) return ctx.wizard.prevStep();

            const user = await Worker.findByPk(ctx.state.worker.id);
            let message = "";

            if(user.wallet === null) message = "Вы успешно установили USDT-адрес"
            else message = "Вы успешно изменили USDT-адрес"

            user.wallet = ctx.message.text;
            await user.save();


            await ctx.replyWithHTML(`<b>✅ ${message} !</b>`)
            return ctx.scene.leave();
        } catch (err) {
            console.log(err)
            ctx.replyOrEdit("❌ Ошибка").catch((err) => err);
            return ctx.scene.leave();
        }
    },
);

module.exports = scene;