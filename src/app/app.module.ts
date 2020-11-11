import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Data
 */

import { UsersModule } from '../users/users.module';
import { RolesModule } from '../roles/roles.module';
import { CriteriaModule } from '../criteria/criteria.module';
import { EvaluationModule } from '../evaluation/evaluation.module';
import { SemestersModule } from '../semesters/semesters.module';

/**
 * Auth
 */

import { AuthModule } from '../auth/auth.module';

/**
 * Typeorm
 */

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../users/users.entity';
import { RolesEntity } from '../roles/roles.entity';
import { CriteriaEntity } from '../criteria/criteria.entity';
import { EvaluationEntity } from '../evaluation/evaluation.entity';
import { SemestersEntity } from '../semesters/semesters.entity';
import { EnrollEntity } from '../enroll/enroll.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'sqlite',
      database: './app.sqlite',
      entities: [UsersEntity, RolesEntity, CriteriaEntity, EvaluationEntity, SemestersEntity, EnrollEntity],
      synchronize: true,
      migrations: ['dist/app/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
      cli: {
        migrationsDir: 'src/app/migrations',
      },
      keepConnectionAlive: true,
    }),
    UsersModule,
    RolesModule,
    CriteriaModule,
    EvaluationModule,
    SemestersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
