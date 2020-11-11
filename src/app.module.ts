import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Data
 */

import { UsersModule } from './app/users/users.module';
import { RolesModule } from './app/roles/roles.module';
import { CriteriaModule } from './app/criteria/criteria.module';
import { EvaluationModule } from './app/evaluation/evaluation.module';
import { SemestersModule } from './app/semesters/semesters.module';

/**
 * Auth
 */

import { AuthModule } from './app/auth/auth.module';

/**
 * Typeorm
 */

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './app/users/users.entity';
import { RolesEntity } from './app/roles/roles.entity';
import { CriteriaEntity } from './app/criteria/criteria.entity';
import { EvaluationEntity } from './app/evaluation/evaluation.entity';
import { SemestersEntity } from './app/semesters/semesters.entity';
import { EnrollEntity } from './app/enroll/enroll.entity';

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
