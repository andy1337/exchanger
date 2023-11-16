require("dotenv").config({
    path: require("path").join(__dirname, "../.env"),
});
const { sequelize, Sequelize } = require("../models");

const withPagination = require("sequelize-pagination");
const options = {
    methodName: "paginate", // the name of the pagination method
    primaryKey: "id", // the primary key field of the model
    oneBaseIndex: true,
};

const workerModel = require("../models/worker");
const settingModel = require("../models/setting");
const requestModel = require("../models/request");
const profitModel = require("../models/profit");
const claimModel = require("../models/claim");
const authCodeModel = require("../models/authcode");

const params = [sequelize, Sequelize.DataTypes];

const Worker = workerModel(...params);
const Request = requestModel(...params);
const Profit = profitModel(...params);
const Claim = claimModel(...params);
const AuthCode = authCodeModel(...params);
const Setting = settingModel(...params);


Worker.hasOne(Request, {
    foreignKey: "userId",
    as: "request",
});
Worker.hasMany(Profit, {
    foreignKey: "userId",
    as: "profits",
});

Request.belongsTo(Worker, {
    foreignKey: "userId",
    targetKey: "id",
    as: "worker",
});
Profit.belongsTo(Worker, {
    foreignKey: "userId",
    targetKey: "id",
    as: "worker",
});

withPagination(options)(Worker)
withPagination(options)(Profit)
withPagination(options)(Request)

module.exports = {
    sequelize,
    Worker,
    Request,
    Profit,
    Claim,
    AuthCode,
    Setting
};