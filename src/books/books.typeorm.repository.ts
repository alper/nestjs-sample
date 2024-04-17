import { Repository } from "typeorm";
import { BooksRepository } from "./books.repository.interface";
// import { Book } from "src/books/books.model";
import { Book } from "./books.entity";
import { CreateBookDto } from "./create-book.dto";

export class BooksTypeOrmRepository implements BooksRepository {

    constructor(private booksRepository: Repository<Book>) { }

    async findOne(bookId: string): Promise<Book> {
        return this.booksRepository.findOne({ where: { id: Number(bookId) } });
    }

    async delete(bookId: string): Promise<boolean> {
        await this.booksRepository.delete(bookId);

        return true;
    }

    async create(book: CreateBookDto): Promise<number> {
        const bookEntity: Partial<Book> = {
            id: null,
            title: book.title,
            description: book.description,
            author: book.author
        }

        const result = await this.booksRepository.insert(bookEntity);

        return result.identifiers[0].id;
    }

    async findAll(): Promise<Book[]> {
        return this.booksRepository.find();
    }
}