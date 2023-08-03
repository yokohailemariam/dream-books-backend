//importing modules
import { Request, Response, Router } from 'express'

import {
  createBookHandler,
  getBookHandler,
  uploadBookImage,
  uploadImage
} from '../controller/bookControllers'

const router = Router()

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
router.get('/books', getBookHandler)

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
router.post('/books', createBookHandler)

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
router.post('/upload', uploadImage, uploadBookImage)

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
router.get('/', (req: Request, res: Response) => {
  res.send('Book api endpoint')
})

export default router
