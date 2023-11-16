const { Markup } = require("telegraf");

const { Request } = require("../../database");

const paginate = require("../../../utils/paginate");
const chunk = require("chunk");

module.exports = async (ctx, page = 1) => {
  try {
    const requests = await Request.paginate({
      pageIndex: parseInt(page),
      pageSize: 30,
      orders: [["status", "asc"]],
    });

    const getRequestStatus = (status) => (status == 0 ? "⏳" : status == 1 ? "✅" : "❌");

    var buttons = chunk(
      requests.data.map((v) =>  Markup.callbackButton(
        `${getRequestStatus(v.status)} #${v.id}`,
        `admin#request#${v.id}`
      )
    ), 3);

  
    if (buttons.length < 1) {
      buttons = [[Markup.callbackButton("Страница пуста", "none")]];
    }

    return ctx
      .replyOrEdit(`📰 Список заявок (Всего: ${requests.meta.total})`, {
        reply_markup: Markup.inlineKeyboard([
          ...buttons,
          paginate(requests.meta, "admin#requests#"),
          [Markup.callbackButton("🔙 Назад", "admin")],
        ]),
      })
      .catch((err) => err);
  } catch (err) {
    await require("../../../utils/sendError")(err)
    return ctx.reply("❌ Ошибка").catch((err) => err);
  }
};