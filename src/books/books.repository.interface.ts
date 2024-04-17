import { Book } from "./books.entity";
import { CreateBookDto } from "./create-book.dto";

export interface BooksRepository {
    findOne(bookId: string): Promise<Book>;
    create(book: CreateBookDto): Promise<number>;
    findAll(): Promise<Book[]>;
    delete(bookId: string): Promise<boolean>;
}

export const BOOKS_REPOSITORY_TOKEN = 'books-repository-token';