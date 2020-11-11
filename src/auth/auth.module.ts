import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';

import { UsersEntity } from '../users/users.entity';
import { UsersModule } from '../users/users.module';
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
