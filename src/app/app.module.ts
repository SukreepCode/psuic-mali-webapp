import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { RolesModule } from '../roles/roles.module';
import { CriteriaModule } from '../criteria/criteria.module';
import { EvaluationModule } from '../evaluation/evaluation.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, RolesModule, CriteriaModule, EvaluationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
