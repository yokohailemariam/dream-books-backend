import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()
console.log('process.env.DB_DATABASE')
console.log(process.env.DB_DATABASE)
export const sequelize = new Sequelize(
  process.env.DB_DATABASE ?? '',
  process.env.DB_USERNAME ?? '',
  process.env.DB_PASSWORD,
  { dialect: 'postgres' }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected to discover')
  })
  .catch((err) => {
    console.log(err)
  })
