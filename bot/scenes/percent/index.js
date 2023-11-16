const WizardScene = require("telegraf/scenes/wizard");

const { Setting } = require("../../database");

const scene = new WizardScene(
    "admin#change#percent",
    async (ctx) => {
        try {
            await ctx.reply(`<i>📝 Введите процент выплат:</i>`, {
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

            let percentNew = parseFloat(ctx.message?.text);
            if (isNaN(percentNew)) return ctx.wizard.prevStep();

            const percent = await Setting.findOne({
                where: {
                    key: "profit_percent"
                }
            })

            percent.value = percentNew;
            await percent.save();

            await ctx.replyWithHTML(`<b>✅ Вы успешно изменили процент выплат!</b>`)
            return ctx.scene.leave();
        } catch (err) {
            console.log(err)
            ctx.replyOrEdit("❌ Ошибка").catch((err) => err);
            return ctx.scene.leave();
        }
    },
);

module.exports = scene;