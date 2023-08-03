import { DataTypes, Model } from 'sequelize'

import { sequelize } from '../config/db.js'
export class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },

    discountRate: {
      type: DataTypes.INTEGER
    },

    coverImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'book'
  }
)
