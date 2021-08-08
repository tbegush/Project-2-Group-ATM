// import all models
const Post = require('./Post');
const User = require('./User');
const Caption = require('./Caption');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  // through: Vote,
  // as: 'voted_posts',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  // through: Vote,
  // as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//   foreignKey: 'post_id'
// });

Caption.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Caption.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Caption, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Caption, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Caption };
