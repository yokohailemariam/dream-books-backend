"use strict";
// import { Request, Response } from 'express'
// import { purchaseBook } from '../service/service'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookHandler = exports.uploadBookImage = exports.uploadImage = exports.createBookHandler = void 0;
const bookRepositories_1 = require("../repository/bookRepositories");
const multer_1 = __importDefault(require("../utils/multer"));
const bookServices_1 = require("../service/bookServices");
function createBookHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, description, discountRate, coverImage, price } = req.body;
        try {
            yield (0, bookRepositories_1.createBook)({
                title,
                description,
                discountRate,
                coverImage,
                price
            });
            res.send('Book created successfully!');
        }
        catch (error) {
            throw error;
        }
    });
}
exports.createBookHandler = createBookHandler;
exports.uploadImage = multer_1.default.single('image');
function uploadBookImage(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        res.send(`/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.path}`);
    });
}
exports.uploadBookImage = uploadBookImage;
function getBookHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const perPage = Number(req.query.perPage);
        const page = Number(req.query.page);
        const books = (0, bookServices_1.getBooksService)({ perPage, page });
        res.send(books);
    });
}
exports.getBookHandler = getBookHandler;
