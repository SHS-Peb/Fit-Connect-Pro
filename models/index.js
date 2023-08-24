const User = require('./User');
const WorkoutType = require('./WorkoutType');
const Workout = require('./Workout');


User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});


WorkoutType.hasMany(Workout, {
  foreignKey: 'workouttype_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(WorkoutType, {
  foreignKey: 'workouttype_id'
});


module.exports = { User, WorkoutType, Workout};