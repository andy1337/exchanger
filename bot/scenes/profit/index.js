const WizardScene = require("telegraf/scenes/wizard");

const { Setting, Worker, Profit, Claim } = require("../../database");
const { converter } = require("../../../utils/converter");

const scene = new WizardScene(
    "add#user#profit",
    async (ctx) => {
        try {
            const claim = await Claim.findByPk(ctx.scene.state.claimId);

            await ctx.reply(`<i>Введите сумму (${JSON.parse(claim.from).name_ru}):</i>`, {
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

            let amountCoin = parseFloat(ctx.message?.text);
            if (isNaN(amountCoin)) return ctx.wizard.prevStep();
            //amountCoin = amountCoin.toFixed(6);

            const claim = await Claim.findByPk(ctx.scene.state.claimId);
            
            const worker = await Worker.findOne({
                where: {
                    ref_code: claim.ref_code
                }
            });

            const toObject = JSON.parse(claim.to)
            const fromObject = JSON.parse(claim.from)

            const amounts = JSON.parse(claim.amounts)  

            const amountUSD = await converter(amountCoin, fromObject.id)

            const {value: percentValue} = await Setting.findOne({
                where: {
                    key: "profit_percent",
                }
            })
            
            const messagePayout = [
                "✅ Обнаружен перевод",
                "",
                `💸Сумма: ${amountCoin} (${fromObject.name_ru}) / ${Number(Math.floor(amountUSD)).toFixed(0)} $`,
                `🪙Процент воркера: ${percentValue}% / ${(Number(Math.floor(amountUSD)).toFixed(0) / 100) * percentValue} $`,
                `👤Воркер: ${worker.tag != null ? worker.tag : worker.username}`,
                "",
                "⏱Ожидает выплаты"
            ];

            const message = await ctx.telegram.sendMessage(process.env.PAYOUT_CHAT_ID, messagePayout.join("\r\n"))

            await Profit.create({
                userId: worker.id,
                payoutMessageId: message.message_id,
                from: fromObject.name_ru,
                to: toObject.name_ru,
                fromId: fromObject.id,
                toId: toObject.id,
                fromAmount: amounts.from,
                toAmount: amounts.to,
                amountCoin: amountCoin,
                amountUsd: amountUSD,
                status: 0
            })

            const messageWorker = [
                "💸Успех!",
                "",
                `💰Обнаружен перевод на сумму: ${Number(Math.floor(amountUSD)).toFixed(0)} USD`
            ];

            await ctx.telegram.sendMessage(worker.telegram_id, messageWorker.join("\r\n"))


            await ctx.replyWithHTML(`<b>Профит успешно добавлен</b>`)

            return ctx.scene.leave();
        } catch (err) {
            console.log(err)
            ctx.replyOrEdit("❌ Ошибка").catch((err) => err);
            return ctx.scene.leave();
        }
    },
);

module.exports = scene;