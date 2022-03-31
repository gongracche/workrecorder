'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task_records extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  task_records.init({
    task_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    department_id: DataTypes.INTEGER,
    start_at: DataTypes.DATE,
    end_at: DataTypes.DATE,
    remarks: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'task_records',
  });
  return task_records;
};