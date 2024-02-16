import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { provideBooksRepository } from './repositories/book.repository.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './models/book.model';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService, ...provideBooksRepository()]
})
export class BooksModule { }
