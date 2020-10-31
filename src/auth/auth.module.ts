import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';

import { UsersEntity } from '../users/users.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([UsersEntity])],
  controllers: [AuthController],
  providers: [UsersService],
})
export class AuthModule {}
