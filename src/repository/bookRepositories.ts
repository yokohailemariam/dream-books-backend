import { Book } from '../entity/bookEntities'

export async function createBook({
  title,
  description,
  discountRate,
  coverImage,
  price
}: BookData) {
  try {
    let book = await Book.create({
      title,
      description,
      discountRate,
      coverImage,
      price
    })

    return book
  } catch (error) {
    console.log(error)
  }
}

export async function getBooks({
  perPage: limit = 10,
  page: offset = 0
}: GetBooksOptions = {}) {
  try {
    const books = await Book.findAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    })

    // Calculate the discounted price of each book
    books.forEach((book) => {
      const discountedPrice =
        book.dataValues.price * (1 - book.dataValues.discountRate / 100)
      book.dataValues.price = discountedPrice
    })

    return books
  } catch (error) {
    console.log(error)
  }
}

export interface BookData {
  title: string
  description: string
  discountRate: number
  coverImage: string
  price: number
}

export interface GetBooksOptions {
  perPage?: number
  page?: number
}
