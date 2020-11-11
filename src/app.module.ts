import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Data
 */

import { UsersModule } from './admin/users/users.module';
import { RolesModule } from './admin/roles/roles.module';
import { CriteriaModule } from './admin/criteria/criteria.module';
import { EvaluationModule } from './admin/evaluation/evaluation.module';
import { SemestersModule } from './admin/semesters/semesters.module';

/**
 * Auth
 */

import { AuthModule } from './auth/auth.module';

/**
 * Typeorm
 */

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './admin/users/users.entity';
import { RolesEntity } from './admin/roles/roles.entity';
import { CriteriaEntity } from './admin/criteria/criteria.entity';
import { EvaluationEntity } from './admin/evaluation/evaluation.entity';
import { SemestersEntity } from './admin/semesters/semesters.entity';
import { EnrollEntity } from './admin/enroll/enroll.entity';
import { AdminModule } from './admin/admin.module';

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
    // UsersModule,
    // RolesModule,
    // CriteriaModule,
    // EvaluationModule,
    // SemestersModule,
    AuthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
