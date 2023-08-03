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
exports.getBooksService = exports.createBookService = void 0;
const bookRepositories_1 = require("../repository/bookRepositories");
function createBookService(bookData) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, bookRepositories_1.createBook)(bookData);
    });
}
exports.createBookService = createBookService;
function getBooksService({ perPage: limit = 10, page = 1 }) {
    return __awaiter(this, void 0, void 0, function* () {
        const offset = (page - 1) * limit;
        return (0, bookRepositories_1.getBooks)({ perPage: limit, page: offset });
    });
}
exports.getBooksService = getBooksService;
