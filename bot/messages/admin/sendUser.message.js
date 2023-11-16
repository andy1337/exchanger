const { Op } = require("sequelize");
const { Markup } = require("telegraf");
const { Profit, Worker } = require("../../database");

module.exports = async (ctx, id) => {
  try {
    const user = await Worker.findOne({
      where: {
        [Op.or]: [
          {
            id,
          },
          {
            username: id,
          },
        ],
      },
      include: [
        {
          association: "request",
        },
      ],
    });

    if (!user) {
      return ctx
        .replyOrEdit("❌ Пользователь не найден", {
          reply_markup: Markup.inlineKeyboard([
            [Markup.callbackButton(
              "🔙 Назад",
              "admin"
            ),],
          ]),
        })
        .catch((err) => err);
    }

    const stats = {
      profits: await Profit.count({
        where: {
          userId: user.id,
        },
      }),
    };

    const request_btn = user.request
      ? [
          [
            Markup.callbackButton(
              "📰 Перейти к заявке",
              `admin#request#${user.request.id}`
            ),
          ],
        ]
      : [];

    const message = [
      `👤 Пользователь <b><a href="tg://user?id=${user.id}">${user.username}</a></b>`,
      `${user.banned ? "<i><b>🚫 Этот пользователь заблокирован</b></i>\n" : ""}`,
      `🆔 ID: <code>${user.id}</code>`,
      `💰 Профитов: <b>${stats.profits}</b>`,
      `👀 Тег: <b>${user.tag !== null ? user.tag : "Не указан"}</b>`,
      `🚦 Статус: <b>${user.status == 1 ? "Администратор" : "Воркер"}</b>`,
      "",
      `📰 Заявка: <b>${
        user.request
          ? `
— ID: ${user.request.id}
— Статус: ${
              user.request.status == 0
                ? "⏳ На рассмотрении"
                : user.request.status == 1
                ? "✅ Принята"
                : "❌ Отклонена"
            }`
          : "нету"
      }</b>`
    ]

    return ctx.replyOrEdit(message.join("\r\n"),
      {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard([
          [
            Markup.callbackButton(
              user.banned ? "✅ Разблокировать" : "🚫 Заблокировать",
              `admin#user#${user.id}#${user.banned ? "un" : ""}ban`
            ),
          ],
          ...request_btn,
          [Markup.callbackButton("◀️ Назад", "admin#users#1")],
        ]),
      }
    )
  } catch (err) {
    console.log(err)
  }

};