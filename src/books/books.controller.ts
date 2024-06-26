import { Body, Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) { }

    @Get()
    async getBooks(@Req() request: Request) {
        console.log("Get all books");
        console.log("request", request);

        const books = await this.bookService.getBooks();
        return books;
    }

    @Get(':book')
    async getBook(@Param('book') bookID: string) {
        // @Param('bookId') bookId: string
        // console.log("bookId", bookId);

        // console.log("params", bookId);

        const book = await this.bookService.getBook(bookID);

        return book;
    }

    @Post()
    async addBook(@Body() createBookDTO: CreateBookDto) {
        const book = await this.bookService.addBook(createBookDTO);

        return book;
    }

    @Delete()
    async deleteBook(@Query() query) {
        const books = await this.bookService.deleteBook(query.bookID);

        return books;
    }
}
