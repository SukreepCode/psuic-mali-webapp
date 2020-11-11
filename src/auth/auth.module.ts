import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../admin/users/users.service';
import {AuthController} from './auth.controller';

import { UsersEntity } from '../admin/users/users.entity';
import { UsersModule } from '../admin/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from '../admin/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { JwtStrategy } from '../admin/strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forFeature([UsersEntity]),
    PassportModule,
    // JwtModule.register({
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: '1800s' },
    // })
  ],
  controllers: [AuthController],
  providers: [UsersService, AuthService, LocalStrategy, SessionSerializer/* , JwtStrategy */],
})
export class AuthModule { }
