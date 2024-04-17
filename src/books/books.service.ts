import { HttpException, Inject, Injectable } from '@nestjs/common';
import { BOOKS } from './books.mocks';
import { BOOKS_REPOSITORY_TOKEN, BooksRepository } from './books.repository.interface';
import { Book } from './books.entity';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksService {
    constructor(@Inject(BOOKS_REPOSITORY_TOKEN) private booksRepository: BooksRepository) { };

    getBooks(): Promise<Book[]> {
        return this.booksRepository.findAll();
    }

    getBook(bookId: string): Promise<Book> {
        console.log(bookId);
        return this.booksRepository.findOne(bookId);
    }

    addBook(book: CreateBookDto): Promise<number> {
        return this.booksRepository.create(book);
    }

    deleteBook(bookId: string): Promise<boolean> {
        return this.booksRepository.delete(bookId);
    }
}
