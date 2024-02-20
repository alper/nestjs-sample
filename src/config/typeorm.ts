import { registerAs } from "@nestjs/config";
import { Book } from "../books/models/book.model";
import { ConnectionOptions, DataSource, DataSourceOptions } from "typeorm";

export const dbConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'nestjs',
    password: 'nestjs',
    database: 'nestjsbooks',
    entities: [Book],
    // migrations: ['./src/migrations/*.ts'],
    migrations: ['dist/migrations/*.js'],
    synchronize: false,
}

export default registerAs('typeorm', () => dbConfig);
export const connectionSource = new DataSource(dbConfig as DataSourceOptions);
