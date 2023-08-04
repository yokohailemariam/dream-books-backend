"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooks = exports.createBook = void 0;
const bookEntities_1 = require("../entity/bookEntities");
function createBook({ title, description, discountRate, coverImage, price }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let book = yield bookEntities_1.Book.create({
                title,
                description,
                discountRate,
                coverImage,
                price
            });
            return book;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createBook = createBook;
function getBooks({ perPage: limit = 10, page: offset = 0 } = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield bookEntities_1.Book.findAll({
                limit,
                offset,
                order: [['createdAt', 'DESC']]
            });
            // Calculate the discounted price of each book
            books.forEach((book) => {
                const discountedPrice = book.dataValues.price * (1 - book.dataValues.discountRate / 100);
                book.dataValues.price = discountedPrice;
            });
            return books;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getBooks = getBooks;
