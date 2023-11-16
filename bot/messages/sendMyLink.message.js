const { Markup } = require("telegraf");

module.exports = async (ctx) => {

  const message = [
    `🇷🇺 <b>Твоя персональная ссылка(СНГ)</b>: <a href="https://ru.${process.env.CURRENT_DOMAIN}/?ref=${ctx.state.worker.ref_code}">перейти</a>`,
    `🇺🇸 <b>Твоя персональная ссылка(EU)</b>: <a href="https://en.${process.env.CURRENT_DOMAIN}/?ref=${ctx.state.worker.ref_code}">перейти</a>`,

  ]

  return ctx.replyOrEdit(message.join("\r\n"), {
    parse_mode: "HTML",
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.callbackButton(
          "🔙 Назад",
          "start"
        ),
      ],
    ]),
  })
};