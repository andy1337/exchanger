'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profit.init({
    userId: DataTypes.INTEGER,
    payoutMessageId: DataTypes.INTEGER,
    from: DataTypes.TEXT,
    to: DataTypes.TEXT,
    fromId: DataTypes.INTEGER,
    toId: DataTypes.INTEGER,
    fromAmount: DataTypes.TEXT,
    toAmount: DataTypes.TEXT,
    amountCoin: DataTypes.TEXT,
    amountUsd: DataTypes.TEXT,
    status: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Profit',
  });
  return Profit;
};