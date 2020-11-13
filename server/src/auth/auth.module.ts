import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../admin/users/users.service';
import {AuthController} from './auth.controller';

import { UsersEntity } from '../admin/users/users.entity';
import { UsersModule } from '../admin/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forFeature([UsersEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1800s' },
    }),
  ],
  controllers: [AuthController],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy ],
})
export class AuthModule { }
