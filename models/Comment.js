const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init({
  // Id datatype integer, dont allow NULL, Primary Key, AutoIncrement
  // Comment_text datatype string
  // date created datatype date, dont allow NULL, Default value = DataType.now
  // Post_id data type integer refers to Post id
  //
  // {
  //     sequelize,
  //     timestamps: false,
  //     freezeTableName: true,
  //     underscored: true,
  //     modelName: 'Comment',
  //   }
});
