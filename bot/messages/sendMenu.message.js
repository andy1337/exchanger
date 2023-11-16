const { Markup } = require("telegraf");

const declOfNum = (n, titles) => titles[
  n % 10 === 1 && n % 100 !== 11
    ? 0
    : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
      ? 1
      : 2
];

const moment = require("../../utils/moment")

module.exports = async (ctx) => {

  const daysWithUs = moment().diff(moment(ctx.state.worker.createdAt), "days");
  const hoursWithUs = moment().diff(moment(ctx.state.worker.createdAt), "hours");
  const minutesWithUs = moment().diff(moment(ctx.state.worker.createdAt), "minutes");

  const secondsWithUs = moment().diff(moment(ctx.state.worker.createdAt), "seconds");

  let withUsText = `${daysWithUs} ${declOfNum(daysWithUs, ["день", "дня", "дней"])}`;

  if (daysWithUs < 1) {
    withUsText = `${hoursWithUs} ${declOfNum(hoursWithUs, ["час", "часа", "часов"])}`;
  }

  if (hoursWithUs < 1) {
    withUsText = `${minutesWithUs} ${declOfNum(minutesWithUs, ["минуту", "минуты", "минут"])}`;
  }
  if (minutesWithUs < 1) {
    withUsText = `${secondsWithUs} ${declOfNum(secondsWithUs, ["секунду", "секунды", "секунд"])}`;
  }

  const usertag = ctx.state.worker.tag === null ? "Не указан" : ctx.state.worker.tag
  const wallet = ctx.state.worker.wallet === null ? "Не указан" : ctx.state.worker.wallet

  const message = [
    `<b>💠 Привет,</b> <code>${ctx.state.worker.username}</code>`,
    "",
    //"<i>🌐 Кол-во твоих профитов:</i> <b>{profits_count}</b>",
    //"<i>💵 Сумма твоих профитов:</i> <b>{profits_sum}</b>",
    `<i>👁‍🗨 Тег:</i> <b>${usertag}</b>`,
    `<i>💰 USDT-адрес:</i> <b>${wallet}</b>`,
    "➖➖➖➖➖➖➖➖",
    `<b>®️ Ты с нами уже ${withUsText}</b>`,
  ]


  return ctx.replyOrEdit(message.join("\r\n"), {
    parse_mode: "HTML",
    reply_markup: Markup.inlineKeyboard([
      [
        Markup.callbackButton(
          "Моя ссылка",
          "user#link"
        ),
      ],
      [
        Markup.callbackButton(
          "Мои профиты",
          "user#profits#1"
        ),
      ],
      [
        Markup.callbackButton(
          "Настройки",
          "user#settings"
        ),
      ],
      [
        Markup.urlButton(`👥 Чат воркеров`, process.env.CHAT_LINK),
        Markup.urlButton(`💸 Выплаты`, process.env.PAYOUT_LINK)
      ]
    ]),
  })
};