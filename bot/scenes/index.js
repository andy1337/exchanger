const Stage = require("telegraf/stage");

const mail = require("./mail/index");
const profit = require("./profit/index");
const request = require("./request/index");
const tag = require("./tag/index");
const usdt = require("./usdt/index");

const tech = require("./tech/index");
const percent = require("./percent/index");

const stage = new Stage([
    mail, profit, request, tag, usdt, tech, percent
]);

stage.action("cancel", (ctx) => ctx.scene.leave());

module.exports = stage;