import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationController } from './authentication.controller';
import { UsersService } from '../users.service';

import { UsersEntity } from '../users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [AuthenticationController],
  providers: [UsersService],
})
export class AuthenticationModule {}
