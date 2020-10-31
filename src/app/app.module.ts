import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { RolesModule } from '../roles/roles.module';
import { CriteriaModule } from '../criteria/criteria.module';
import { EvaluationModule } from '../evaluation/evaluation.module';
import { SemestersModule } from "../semesters/semesters.module";

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, RolesModule, CriteriaModule, EvaluationModule, SemestersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
