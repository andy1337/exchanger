const { Markup } = require("telegraf");

module.exports = async (ctx) => {
  return ctx
    .replyOrEdit("‼️ <b>Для работы c ботом, необходимо подать заявку</b>", {
      parse_mode: "HTML",
      reply_markup: Markup.inlineKeyboard([
        [
          Markup.callbackButton(
            "Перейти к заполнению",
            "request#create"
          ),
        ],
      ]),
    })
};