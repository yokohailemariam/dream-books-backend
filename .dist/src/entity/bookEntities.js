"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const db_js_1 = require("../config/db.js");
class Book extends sequelize_1.Model {
}
exports.Book = Book;
Book.init({
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    discountRate: {
        type: sequelize_1.DataTypes.INTEGER
    },
    coverImage: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db_js_1.sequelize,
    modelName: 'book'
});
