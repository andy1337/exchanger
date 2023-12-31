'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Worker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Worker.init({
    ref_code: DataTypes.STRING,
    telegram_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    tag: DataTypes.STRING,
    wallet: DataTypes.STRING,
    status: DataTypes.TINYINT,
    banned: DataTypes.TINYINT,
  }, {
    sequelize,
    modelName: 'Worker',
  });
  return Worker;
};