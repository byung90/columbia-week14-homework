const sequelize = require('../config/connection.js');
const seedUsers = require('./users.js');
const seedPosts = require('./posts.js');
const seedComments = require('./comments');

const seed = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  console.log('----- USERS SEEDED -----');

  await seedPosts();
  console.log('----- POSTS SEEDED -----');

  await seedComments();
  console.log('----- COMMENTS SEEDED -----');

  process.exit(0);
};

seed();