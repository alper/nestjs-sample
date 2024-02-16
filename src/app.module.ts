import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Book } from './books/entities/books.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import typeorm from './config/typeorm';
import { config } from 'process';

import { dbConfig } from './config/typeorm';
import { DataSourceOptions } from 'typeorm';

// @Module({
//   imports: [BooksModule,
//     ConfigModule.forRoot({
//       isGlobal: true,
//       load: [typeorm]
//     }),
//     TypeOrmModule.forRootAsync({
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
//     }),],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }

console.log("DBCONFIG", dbConfig);

@Module({
  imports: [
    BooksModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }

console.log("TEST");