'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Claim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Claim.init({
    ref_code: DataTypes.STRING,
    to: DataTypes.STRING,
    from: DataTypes.STRING,
    amounts: DataTypes.STRING,
    uuid: DataTypes.STRING,
    userRequisites: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Claim',
  });
  return Claim;
};