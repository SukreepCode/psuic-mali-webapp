import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumsModule } from './albums/albums.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
 
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AlbumsModule,
    UsersModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
