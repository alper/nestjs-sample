import { Repository } from "typeorm";
import { BooksRepository } from "../book.repository.interface";
import { Book } from "src/books/models/book.model";

export class BooksTypeOrmRepository implements BooksRepository {

    constructor(private booksRepository: Repository<Book>) { }

    async create(book: Book): Promise<Book> {
        await this.booksRepository.insert(book);

        return book;

    }

    async findAll(): Promise<Book[]> {
        return this.booksRepository.find();
    }
}