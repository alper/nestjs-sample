import { Book } from "src/books/entities/books.entity";
import { BooksRepository } from "../book.repository.interface";

export class BooksInMemoryRepository implements BooksRepository {
    private books: Book[] = [];

    async create(book: Book) {
        this.books.push(book);

        return book;
    }

    async findAll() {
        return this.books;
    }
}