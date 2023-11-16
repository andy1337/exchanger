const escapeHTML = require("escape-html");
const { Markup } = require("telegraf");
const { Request } = require("../database");

module.exports = async (ctx, id) => {
  try {
    const request = await Request.findOne({
      where: {
        id,
      },
      include: [
        {
          association: "worker",
          required: true,
        },
      ],
    });

    if (!request) {
        return ctx
        .replyOrEdit("❌ Заявка не найдена", {
          reply_markup: Markup.inlineKeyboard([
            [
              Markup.callbackButton(
                "◀️ Назад",
                userId ? `admin_user_${userId}` : `admin#requests#1`
              ),
            ],
          ]),
        })
        .catch((err) => err);
    }

    const message = [
        `ℹ️ Новая заявка от пользователя <b><a href="tg://user?id=${request.worker.telegram_id}">${request.worker.username}</a></b>`,
        "",
        `Какой опыт работы?: <b>${escapeHTML(request.step1)}</b>`,
        `Сколько времени готовы уделять?: <b>${escapeHTML(request.step2)}</b>`,
        `Укажите, где вы увидели рекламу.: <b>${escapeHTML(request.step3)}</b>`,
        "",
        `🚦 Статус: <b>${request.status == 0 ? "⏳ На рассмотрении" : (request.status == 1 ? "✅ Принято": "❌ Отклонено")}</b>`,
    ]

    return ctx
      .replyOrEdit(message.join("\r\n"), {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        disable_notification: true,
    });
  } catch (err) {
    await require("../../utils/sendError")(err)
    return ctx.reply("❌ Ошибка").catch((err) => err);
  }
};