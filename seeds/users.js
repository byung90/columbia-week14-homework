const sequelize = require('../config/connection.js');
const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    email: 'a@a.com',
    username: 'a',
    password: 'password',
  },
  {
    email: 'b@b.com',
    username: 'b',
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;