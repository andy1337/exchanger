const { Markup } = require("telegraf");

const { Profit } = require("../database");

const paginate = require("../../utils/paginate");

module.exports = async (ctx, page = 1) => {
  const profits = await Profit.paginate({
    pageIndex: parseInt(page),
    pageSize: 10,
    where: {
      userId: ctx.state.worker.id,
    },
  });

  var buttons = profits.data.map((v) => [
    Markup.callbackButton(
      `➕ ${v.fromAmount} ${v.from}`,
      `user#profit#${v.id}`
    ),
  ]);

  if (buttons.length < 1) {
    buttons = [[Markup.callbackButton("Страница пуста", "none")]];
  }

  const message = [
    `💰 Список ваших профитов (Всего: ${profits.meta.total}`,
  ]

  return ctx.replyOrEdit(message.join("\r\n"), {
    parse_mode: "HTML",
    reply_markup: Markup.inlineKeyboard([
      ...buttons,
      paginate(profits.meta, "user#profits#"),
      [
        Markup.callbackButton(
          "🔙 Назад",
          "start"
        ),
      ],
    ]),
  })
};