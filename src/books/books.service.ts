import { HttpException, Inject, Injectable } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mocks';
import { BOOKS_REPOSITORY_TOKEN, BooksRepository } from './repositories/book.repository.interface';

@Injectable()
export class BooksService {
    books = BOOKS;

    constructor(@Inject(BOOKS_REPOSITORY_TOKEN) private booksRepository: BooksRepository) { };

    getBooks(): Promise<any> {
        return this.booksRepository.findAll();
    }

    getBook(bookID): Promise<any> {
        console.log("Got id", bookID);
        let id = Number(bookID);
        return new Promise(resolve => {
            const book = this.books.find(book => book.id === id);

            if (!book) {
                throw new HttpException('Book does not exist!', 404);
            }

            resolve(book);
        });
    }

    addBook(book): Promise<any> {
        return this.booksRepository.create(book);
    }

    deleteBook(bookID): Promise<any> {
        let id = Number(bookID);
        return new Promise(resolve => {
            let index = this.books.findIndex(book => book.id === id);

            if (index === -1) {
                throw new HttpException('Book does not exist!', 404);
            }

            this.books.splice(1, index);
            resolve(this.books);
        });
    }
}
