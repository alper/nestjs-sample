import { Book } from "../entities/books.entity";

export interface BooksRepository {
    create(book: Book): Promise<Book>;
    findAll(): Promise<Book[]>;
}

export const BOOKS_REPOSITORY_TOKEN = 'books-repository-token';