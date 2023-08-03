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
  page: offset = 0
}: GetBooksOptions) {
  return await getBooks({ perPage: limit, page: offset })
}
