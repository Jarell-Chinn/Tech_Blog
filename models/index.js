const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User hasMany Posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
// Post belongs to User
Post.belongsTo(User, {
  foreignKey: "user_id",
});
// Post hasMany Comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});
// Comments belongsTo Post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
// export User, Post, Comment

module.exports = { User, Post, Comment };
