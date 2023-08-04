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
  try {
    await createBook({
      title,
      description,
      discountRate,
      coverImage,
      price
    })

    res.send('Book created successfully!')
  } catch (error) {
    console.log(error)
  }
}

export const uploadImage = upload.single('image')

export async function uploadBookImage(req: Request, res: Response) {
  res.send(`/${req.file?.path}`)
}

export async function getBookHandler(req: Request, res: Response) {
  const perPage = Number(req.query.perPage)
  const page = Number(req.query.page)

  try {
    const books = await getBooksService({ perPage, page })

    res.send(books)
  } catch (error) {
    console.log(error)
  }
}
