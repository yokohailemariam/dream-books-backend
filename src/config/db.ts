// import { Sequelize, DataTypes } from 'sequelize'

// const sequelize = new Sequelize(
//   'postgres://postgres:root@localhost:5432/ethio-swift',
//   { dialect: 'postgres' }
// )

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connected to discover')
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// const db = {
//   Sequelize: Sequelize,
//   sequelize: sequelize
// }

// export default db

import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'postgres://postgres:root@localhost:5432/books',
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
