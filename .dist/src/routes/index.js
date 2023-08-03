"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importing modules
const express_1 = require("express");
const bookControllers_1 = require("../controller/bookControllers");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns a list of books
 *     description: Get all books
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/books', bookControllers_1.getBookHandler);
/**
 * @swagger
 * /books:
 *   post:
 *     summary: Creates a new book
 *     description: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 */
router.post('/books', bookControllers_1.createBookHandler);
/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Uploads an image for a book
 *     description: Upload book image
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: OK
 */
router.post('/upload', bookControllers_1.uploadImage, bookControllers_1.uploadBookImage);
/**
 * @swagger
 * /:
 *   get:
 *     summary: API status
 *     description: Returns API status
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', (req, res) => {
    res.send('Book api endpoint');
});
exports.default = router;
