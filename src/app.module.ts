import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { dbConfig } from './config/typeorm';

import { LoggerMiddleWare } from './logger.middleware';

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

@Module({
  imports: [
    BooksModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('*');
  }
}
