import {
  Controller, Post, Body, HttpException, HttpStatus, Logger, UseGuards, Request
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/users.dto';
import { assignObject } from '../app/utils';
import { UsersEntity } from '../users/users.entity';

import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {LocalAuthGuard} from './local-auth.guard';
import {JwtAuthGuard} from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService, private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/profile')
  async profile(@Request() req) {
    return req.user;
  }

  @Post('/signup')
  public async signUp(@Body() newUser: CreateUserDto) {
    const findUser = await this.usersService.findByUsername(newUser.username);
    if (findUser) {
      return new HttpException(
        { status: HttpStatus.CONFLICT, message: `The username: ${newUser.username} is existing.` },
        HttpStatus.CONFLICT,
      );
    }
    const createUser = {
      ...newUser,
      role: 'student',
    };

    const user: UsersEntity = assignObject(new UsersEntity(), createUser);
    return await this.usersService.createOrUpdate(user);
  }

}
