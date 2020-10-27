import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumsModule } from './albums/albums.module';
// import { AlbumsEntity } from './albums/albums.entity';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      // entities: [AlbumsEntity],
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV != 'production',
    }),
    AlbumsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
