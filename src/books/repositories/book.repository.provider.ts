import { Injectable, Provider } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "../models/book.model";
import { BOOKS_REPOSITORY_TOKEN } from "./book.repository.interface";
import { ConfigModule } from "@nestjs/config";
import { BooksTypeOrmRepository } from "./implementations/book.typeorm.repository";
import { DataSourceSetting } from "src/data/constants";
import { BooksInMemoryRepository } from "./implementations/books.in-memory.repository";

export function provideBooksRepository(): Provider[] {
    return [
        {
            provide: BOOKS_REPOSITORY_TOKEN,
            useFactory: async (dependenciesProvider: BooksRepoDependenciesProvider) => provideBooksRepositoryFactory(dependenciesProvider),
            inject: [BooksRepoDependenciesProvider]
        },
        BooksRepoDependenciesProvider
    ]
}

async function provideBooksRepositoryFactory(dependenciesProvidedr: BooksRepoDependenciesProvider) {
    await ConfigModule.forRoot();
    console.log("provide books", process.env.BOOKS_DATASOURCE);

    switch (process.env.BOOKS_DATASOURCE) {
        case DataSourceSetting.TYPEORM:
            console.log("Getting A TYPEORM");
            return new BooksTypeOrmRepository(dependenciesProvidedr.typeOrmRepository);
        case DataSourceSetting.MEMORY:
            console.log("Getting a MEMOREY");
        default:
            console.log("Getting DEFAULT");
            return new BooksInMemoryRepository();

    }
}

@Injectable()
export class BooksRepoDependenciesProvider {
    constructor(@InjectRepository(Book) public typeOrmRepository: Repository<Book>,) { }
}