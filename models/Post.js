const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    // Id datatype integer, dont allow NULL, Primary Key, AutoIncrement
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // topic datatype String, dont allow NULL
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Post_text datatype string

    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // date created datatype date, dont allow NULL, Default value = DataType.now
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // User_id data type integer refers to User id
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Post",
  }
);

// export Post
module.exports = Post;
