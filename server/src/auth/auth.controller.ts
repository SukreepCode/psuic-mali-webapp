import { Controller, Post, Body, HttpException, HttpStatus, Logger, UseGuards, Request } from '@nestjs/common';

import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../common/guards/local-auth.guard';
import { AuthExceptionFilter } from '../common/filters/auth-exceptions.filter';

import { UsersEntity } from '../admin/users/users.entity';
import { UsersService } from '../admin/users/users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../admin/users/users.dto';
import { assignObject } from '../common/utils';

@Controller('auth')
// @UseFilters(AuthExceptionFilter)
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