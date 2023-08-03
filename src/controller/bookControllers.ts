// import { Request, Response } from 'express'
// import { purchaseBook } from '../service/service'

// export async function purchaseBookHandler(
//   req: Request<{}, {}, PurchaseBookBody>,
//   res: Response
// ) {
//   const { bookId, userId } = req.body

//   await purchaseBook(bookId, userId)

//   res.send('Purchased successfully!')
// }

// interface PurchaseBookBody {
//   bookId: number
//   userId: number
// }

import { Request, Response } from 'express'
import { createBook } from '../repository/bookRepositories'
import upload from '../utils/multer'
import { getBooksService } from '../service/bookServices'

export async function createBookHandler(req: Request, res: Response) {
  const { title, description, discountRate, coverImage, price } = req.body

  await createBook({
    title,
    description,
    discountRate,
    coverImage,
    price
  })

  res.send('Book created successfully!')
}

export const uploadImage = upload.single('image')

export async function uploadBookImage(req: Request, res: Response) {
  res.send(`/${req.file?.path}`)
}

export async function getBookHandler(req: Request, res: Response) {
  const perPage = Number(req.query.perPage) || 10
  const page = Number(req.query.page) || 1

  const offset = (page - 1) * perPage

  const books = await getBooksService({ perPage, page: offset })

  res.send(books)
}
