import { Module } from '@nestjs/common';
import { CriteriaController } from './criteria.controller';
import { CriteriaService } from './criteria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriaEntity } from './criteria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriteriaEntity])],
  controllers: [CriteriaController],
  providers: [CriteriaService],
})
export class CriteriaModule {}
