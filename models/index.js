const User = require('./User');
const Workout = require('./Workout');
const WorkoutType = require('./WorkoutType');

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Workout,WorkoutType };