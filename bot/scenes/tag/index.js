const WizardScene = require("telegraf/scenes/wizard");

const { Worker } = require("../../database");

const scene = new WizardScene(
    "change#user#tag",
    async (ctx) => {
        try {
            await ctx.reply(`<i>📝 Введите тег (Пример: #mytag):</i>`, {
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

            let filter = /(#)/
            if(!filter.test(ctx.message.text.toLowerCase())) {
                return ctx.wizard.prevStep();
            }

            const user = await Worker.findByPk(ctx.state.worker.id);
            let message = "";

            if(user.tag === null) message = "Вы успешно установили тег"
            else message = "Вы успешно изменили тег"

            user.tag = ctx.message.text;
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