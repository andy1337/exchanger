const WizardScene = require("telegraf/scenes/wizard");

const { Setting } = require("../../database");

const scene = new WizardScene(
    "admin#change#tech",
    async (ctx) => {
        try {
            await ctx.reply(`<i>📝 Введите продолжительность технических работ (минуты):</i>`, {
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

            let minutes = parseFloat(ctx.message?.text);
            if (isNaN(minutes)) return ctx.wizard.prevStep();

            const tech = await Setting.findOne({
                where: {
                    key: "tech"
                }
            })
            const techValue = JSON.parse(tech.value);

            if(!techValue.techOn) {
                tech.value = `{"techOn":true,"time":${minutes*60}}`
                tech.save();
    
                await ctx.replyWithHTML(`<b>✅ Вы успешно включили техниические работы!</b>`)
            } else {
                tech.value = `{"techOn":false,"time":-1}`
                tech.save();
    
                await ctx.replyWithHTML(`<b>✅ Вы успешно выключили техниические работы!</b>`)
            }

            return ctx.scene.leave();
        } catch (err) {
            console.log(err)
            ctx.replyOrEdit("❌ Ошибка").catch((err) => err);
            return ctx.scene.leave();
        }
    },
);

module.exports = scene;