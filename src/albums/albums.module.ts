import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { AlbumsService } from './albums.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AlbumsEntity } from './albums.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlbumsEntity])],
  controllers: [AlbumsController],
  providers: [AlbumsService]
})
export class AlbumsModule {}
