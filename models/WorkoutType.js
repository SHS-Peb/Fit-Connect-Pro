const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkoutType extends Model {}

WorkoutType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workouttype',
  }
);

module.exports = WorkoutType;
