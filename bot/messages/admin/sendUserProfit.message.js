const { Markup } = require("telegraf");

const { Profit, Worker } = require("../../database");

const { converter } = require("../../../utils/converter");

module.exports = async (ctx, id) => {
  try {
    const profit = await Profit.findByPk(id)

    if (!profit) {
      return ctx.replyOrEdit("❌ Профит не найден", {
        reply_markup: Markup.inlineKeyboard([
          [Markup.callbackButton("🔙 Назад", "admin#profits#1")],
        ]),
      })
    }

    const worker = await Worker.findOne({
      where: {
        id: profit.userId
      }
    });

    const message = [
      `💰 Профит #${profit.id}`,
      "",
      `💸 Сумма: <b>${profit.amountCoin} ${profit.from} / ${profit.amountUsd} USD</b>`,
      `💰 Доля: <b>${Number(Math.floor(profit.amountUsd)).toFixed(0) / 2} $</b>`,
      `👨‍💻 Воркер: <b><a href="tg://user?id=${worker.id}">${worker.username}</a></b>`,
      "",
      `💰 USDT-адрес: <code>${worker.wallet === null ? "Не указан" : worker.wallet}</code>`,
      "",
      `🚦 Статус: <b>${profit.status == 0 ? "В ожидании ⏳" : "✅ Выплачено"}</b>`
    ]

    return ctx.replyOrEdit(message.join("\r\n"),
      {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard([
          [Markup.callbackButton("◀️ Назад", "admin#profits#1")],
        ]),
      }
    )
  } catch (err) {
    console.log(err)
  }

};