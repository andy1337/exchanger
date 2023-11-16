const { Markup } = require("telegraf");

const { Worker, Profit, Request } = require("../../database");

const moment = require("../../../utils/moment")

module.exports = async (ctx) => {
    let stats = {
        users: await Worker.count(),
        profits: await Profit.count(),

        requests: await Request.count(),
        requests_in_process: await Request.count({
            where: {
                status: 0,
            },
        }),
        requests_accepted: await Request.count({
            where: {
                status: 1,
            },
        }),
        requests_declined: await Request.count({
            where: {
                status: 2,
            },
        }),
    };




    const message = [
        `🔐 Панель администратора`,
        "",
        `👥 Пользователей: <b>${stats.users}</b>`,
        `💰 Профитов: <b>${stats.profits}</b>`,
        `📰 Заявок: <b>${stats.requests}</b>`,
        `⏳ Заявок на рассмотрении: <b>${stats.requests_in_process}</b>`,
        `✅ Принятых заявок: <b>${stats.requests_accepted}</b>`,
        `❌ Отклонённых заявок: <b>${stats.requests_declined}</b>`
    ]


    return ctx.replyOrEdit(message.join("\r\n"), {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton("📨 Отправить рассылку", "admin#mail"),
            ],
            [
                Markup.callbackButton("👥 Пользователи", "admin#users#1"),
            ],
            [
                Markup.callbackButton("💰 Профиты", "admin#profits#1"),
            ],
            [
                Markup.callbackButton("📰 Заявки", "admin#requests#1"),
            ],
            [
                Markup.callbackButton("✳️ Сгенерировать ссылку в админ панель", "admin#link"),
            ],
            [
                Markup.callbackButton("⚙️ Настройки", "admin#settings"),
            ]
        ]),
    })
};