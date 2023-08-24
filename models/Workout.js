const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    workouttype_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'workouttype',
        key: 'id',
      },
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time_start: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time_end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    calories_burned: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
  }
);

module.exports = Workout;
