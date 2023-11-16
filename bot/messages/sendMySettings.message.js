const { Markup } = require("telegraf");

module.exports = async (ctx) => {

  const message = [
    `⚙️ <b>Настройки: </b>`,
  ]

  return ctx.replyOrEdit(message.join("\r\n"), {
    parse_mode: "HTML",
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.callbackButton(
          "🖌 Изменить тег",
          "user#settings#edit#tag"
        ),
      ],
      [
        Markup.callbackButton(
          "💵 Изменить USDT-адрес",
          "user#settings#edit#usdt"
        ),
      ],
      [
        Markup.callbackButton(
          "🔙 Назад",
          "start"
        ),
      ],
    ]),
  })
};