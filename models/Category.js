const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// This initializes the Category model by extending off Sequelize's Model class
class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }, 
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
