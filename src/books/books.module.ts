import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { provideBooksRepository } from './books.repository.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.model';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService, ...provideBooksRepository()]
})
export class BooksModule { }
