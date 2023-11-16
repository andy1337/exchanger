const { Telegram, Markup } = require("telegraf");
const { workerData, parentPort } = require("worker_threads");
const { Worker } = require("../bot/database");

const { chat_id, message } = workerData;

const bot = new Telegram(process.env.BOT_TOKEN);

(async () => {
  try {
    await bot
      .sendMessage(chat_id, "👥 Собираем список пользователей...")
      .catch((err) => err);
    const users = await Worker.findAndCountAll();
    await bot
      .sendMessage(
        chat_id,
        "✅ Список пользователей собран (Всего: " + users.count + ")"
      )
      .catch((err) => err);
    await bot
      .sendMessage(chat_id, "⏳ Отправляем рассылку...")
      .catch((err) => err);
    var success = 0,
      errors = 0;
    await Promise.allSettled(
      users.rows.map(
        async (v) =>
          await bot
            .sendCopy(v.telegram_id, message, {
              reply_markup: Markup.removeKeyboard(),
            })
            .then(() => success++)
            .catch(() => errors++)
      )
    );
    await bot
      .sendMessage(
        chat_id,
        `📤 Рассылка отправлена!\n\n✅ Успехов: <b>${success}</b>\n❌ Ошибок: <b>${errors}</b>`,
        {
          parse_mode: "HTML",
        }
      )
      .catch((err) => err);
  } catch (err) {}
  parentPort.postMessage(true);
  process.exit();
})();