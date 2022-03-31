'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      departments.hasMany(models.users.departments {
        foreignKey: 'department_id'
      })
    }
  }
  departments.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    order: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'departments',
  });
  return departments;
};