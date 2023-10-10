'use strict'
const { Model } = require('sequelize')
// const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }

  Movies.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      image: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    {
      sequelize,
      modelName: 'Movies'
    }
  )
  return Movies
}
