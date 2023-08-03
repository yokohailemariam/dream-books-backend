import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

export const sequelize = new Sequelize(process.env.DB_URL ?? '', {
  dialect: 'postgres'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected to discover')
  })
  .catch((err) => {
    console.log(err)
  })
