import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]), AuthenticationModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
