const sequelize = require('../config/connection');
const { User, Workout,WorkoutType } = require('../models');

const userData = require('./userData.json');
const workoutData = require('./workoutData.json');
const workouttypeData = require('./workouttypeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const workout of workoutData) {
    await Workout.create({
      ...workout,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const workouttype = await WorkoutType.bulkCreate(workouttypeData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
