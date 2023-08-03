import {
  BookData,
  GetBooksOptions,
  createBook,
  getBooks
} from '../repository/bookRepositories'

export async function createBookService(bookData: BookData) {
  return createBook(bookData)
}

export async function getBooksService({
  perPage: limit = 10,
  page = 1
}: GetBooksOptions) {
  const offset = (page - 1) * limit
  return getBooks({ perPage: limit, page: offset })
}
