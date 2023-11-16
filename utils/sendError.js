require("dotenv").config({
    path: require("path").join(__dirname, "/.env"),
});

const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

module.exports = async function (error) {
    const message = [
        `<b>${error.message}</b>`,
        "",
        `<code>${error.stack.replace("<anonymous>", "")}</code>`
    ];

    console.log(error);
    return bot.telegram.sendMessage(process.env.ERROR_CHAT_ID, message.join("\r\n"), {
        parse_mode: "HTML"
    })
};