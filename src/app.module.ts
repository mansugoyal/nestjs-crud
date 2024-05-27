import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './module/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TodosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'redhat@123',
      database: 'nestjscrud',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }