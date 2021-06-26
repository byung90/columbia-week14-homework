const sequelize = require('../config/connection.js');
const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 2,
    comment_content: 'Nice',
  },
  {
    user_id: 2,
    post_id: 1,
    comment_content: 'Like',
  },
  {
    user_id: 1,
    post_id: 1,
    comment_content: "Cool",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;