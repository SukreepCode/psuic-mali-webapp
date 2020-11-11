import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { CriteriaModule } from './criteria/criteria.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { SemestersModule } from './semesters/semesters.module';

import { AdminGuard } from './admin.guard';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity} from './users/users.entity';


@Module({
    imports: [
        UsersModule,
        RolesModule,
        CriteriaModule,
        EvaluationModule,
        SemestersModule,
        TypeOrmModule.forFeature([UsersEntity])
    ],
    providers: [AdminGuard, UsersService]
})
export class AdminModule {}
