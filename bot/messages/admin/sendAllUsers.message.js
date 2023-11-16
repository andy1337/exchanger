const { Markup } = require("telegraf");

const { Worker } = require("../../database");

const paginate = require("../../../utils/paginate");

const chunk = require("chunk");

module.exports = async (ctx, page = 1) => {
  const users = await Worker.paginate({
    pageIndex: parseInt(page),
    pageSize: 30,
    orders: [["id", "asc"]],
  });


  var buttons = chunk(
    users.data.map((v) => Markup.callbackButton(
      `${v.username}`,
      `admin#user#${v.id}`
    )
  ), 3);

  if (buttons.length < 1) {
    buttons = [[Markup.callbackButton("Страница пуста", "none")]];
  }

  const message = [
    `👥 Список пользователей (Всего: ${users.meta.total})`
  ]

  return ctx.replyOrEdit(message.join("\r\n"), {
    parse_mode: "HTML",
    reply_markup: Markup.inlineKeyboard([
      ...buttons,
      paginate(users.meta, "admin#users#"),
      [
        Markup.callbackButton(
          "🔙 Назад",
          "admin"
        ),
      ],
    ]),
  })
};