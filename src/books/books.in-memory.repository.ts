import { Entity } from "typeorm";
import { Book } from "./books.entity";
import { BOOKS } from "./books.mocks";
import { BooksRepository } from "./books.repository.interface";
import { CreateBookDto } from "./create-book.dto";

export class BooksInMemoryRepository implements BooksRepository {

    private books: Book[] = BOOKS;

    async create(book: CreateBookDto): Promise<number> {
        const newId = this.books.length;

        const bookEntity: Book = {
            id: this.books.length,
            title: book.title,
            description: book.description,
            author: book.author
        }

        book['id'] = newId;

        this.books.push(bookEntity);

        // return book;
        return bookEntity.id;
    }

    async findAll() {
        return this.books;
    }

    async findOne(bookId: string): Promise<Book> {
        return this.books.find(book => book.id === Number(bookId));
    }

    async delete(bookId: string): Promise<boolean> {
        let id = Number(bookId);

        return new Promise(resolve => {
            let index = this.books.findIndex(book => book.id === id);

            if (index === -1) {
                resolve(false);
            }

            this.books.splice(1, index);
            resolve(true);
        });
    }
}