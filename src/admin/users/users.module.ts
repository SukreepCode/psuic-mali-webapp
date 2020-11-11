import { Module, UseGuards } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { UsersEntity } from './users.entity';
import { AuthenticatedGuard } from '../../common/guards/authenticated.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [
    UsersService,
    // { provide: APP_GUARD, useClass: AuthenticatedGuard }
  ],
})
export class UsersModule {}
