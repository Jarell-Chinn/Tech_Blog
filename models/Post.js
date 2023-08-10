const { Model, DataType } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init({
  // Id datatype integer, dont allow NULL, Primary Key, AutoIncrement
  // name datatype String, dont allow NULL
  // Post_text datatype string
  // date created datatype date, dont allow NULL, Default value = DataType.now
  // User_id data type integer refers to User id
  //
  // {
  //     sequelize,
  //     timestamps: false,
  //     freezeTableName: true,
  //     underscored: true,
  //     modelName: 'Post',
  //   }
});

// export Post
