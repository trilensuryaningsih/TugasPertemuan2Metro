'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Proker.init({
    nama: DataTypes.STRING,
    tanggal: DataTypes.DATE,
    DivisiId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Proker',
  });
  return Proker;
};