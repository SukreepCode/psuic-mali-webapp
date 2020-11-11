import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriaController } from './criteria.controller';
import { CriteriaService } from './criteria.service';
import { CriteriaEntity } from './criteria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriteriaEntity])],
  controllers: [CriteriaController],
  providers: [CriteriaService],
})
export class CriteriaModule {}
