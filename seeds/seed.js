const sequelize = require('../config/connection');
const { User, WorkoutType, Workout } = require('../models');

const userData = require('./userData.json');
const workouttypeData = require('./workouttypeData.json');
const workoutData = require('./workoutData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const workouttype = await WorkoutType.bulkCreate(workouttypeData, {
    individualHooks: true,
    returning: true,
  });
  
  for (const workout of workoutData) {
    await Workout.create({
      ...workout,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  

  process.exit(0);
};

seedDatabase();
