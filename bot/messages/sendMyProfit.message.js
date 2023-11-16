const { Markup } = require("telegraf");

const { Profit } = require("../database");
const { converter } = require("../../utils/converter");

module.exports = async (ctx, id) => {
  try {
    const profit = await Profit.findOne({
      where: {
        id,
        userId: ctx.state.worker.id,
      },
    });

    if (!profit) {
      return ctx.replyOrEdit("❌ Профит не найден", {
        reply_markup: Markup.inlineKeyboard([
          [Markup.callbackButton("🔙 Назад", "my#profits#1")],
        ]),
      })
    }

    const convertedAmount = await converter(profit.fromAmount, profit.fromId)

    const message = [
      `💰 Профит #${profit.id}`,
      "",
      `💸 Сумма: <b>${profit.fromAmount} ${profit.from} / ${convertedAmount} USD</b>`,
      `🚦 Статус: <b>${profit.status == 0 ? "В ожидании ⏳" : "✅ Выплачено"}</b>`
    ]
  
    return ctx.replyOrEdit(message.join("\r\n"),
        {
          parse_mode: "HTML",
          reply_markup: Markup.inlineKeyboard([
            [Markup.callbackButton("◀️ Назад", "user#profits#1")],
          ]),
        }
      )
  } catch(err) {
    console.log(err)
  }

};