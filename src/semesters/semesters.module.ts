import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SemestersController } from './semesters.controller';
import { SemestersService } from './semesters.service';
import { SemestersEntity } from './semesters.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SemestersEntity])],
  controllers: [SemestersController],
  providers: [SemestersService],
})
export class SemestersModule {}
