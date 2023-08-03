"use strict";
// import { Sequelize, DataTypes } from 'sequelize'
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
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
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('postgres://postgres:root@localhost:5432/books', { dialect: 'postgres' });
exports.sequelize
    .authenticate()
    .then(() => {
    console.log('Database connected to discover');
})
    .catch((err) => {
    console.log(err);
});
