"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
console.log('process.env.DB_DATABASE');
console.log(process.env.DB_DATABASE);
exports.sequelize = new sequelize_1.Sequelize((_a = process.env.DB_DATABASE) !== null && _a !== void 0 ? _a : '', (_b = process.env.DB_USERNAME) !== null && _b !== void 0 ? _b : '', process.env.DB_PASSWORD, { dialect: 'postgres' });
exports.sequelize
    .authenticate()
    .then(() => {
    console.log('Database connected to discover');
})
    .catch((err) => {
    console.log(err);
});
