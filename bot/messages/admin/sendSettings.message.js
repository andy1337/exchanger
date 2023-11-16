const { Markup } = require("telegraf");

const { Setting } = require("../../database");

const moment = require("../../../utils/moment")

module.exports = async (ctx) => {
    const tech = await Setting.findOne({
        where: {
            key: "tech"
        }
    })
    const techValue = JSON.parse(tech.value);

    const profitPercent = await Setting.findOne({
        where: {
            key: "profit_percent"
        }
    })

    console.log(profitPercent)

   
    const message = [
        `⚙️ Настройки`,
        "",
        `🛠 <b>Технический перерыв</b>: ${techValue.techOn ? "🟩 Включен" : "🟥 Выключен"}`,
        `🔅 <b>Процент выплаты</b>: ${profitPercent.value}%`
    ]


    return ctx.replyOrEdit(message.join("\r\n"), {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton(`${techValue.techOn ? "Выключить технический перерыв" : "Включить технический перерыв"}`, "admin#tech"),
            ],
            [
                Markup.callbackButton("Изменить процент", "admin#percent"),
            ],
            [
                Markup.callbackButton("🔙 Назал", "admin"),
            ]
        ]),
    })
};