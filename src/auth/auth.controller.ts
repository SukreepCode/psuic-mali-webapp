import {
  Controller, Post, Body, HttpException, HttpStatus, Logger,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/users.dto';
import { assignObject } from '../app/utils';
import { UsersEntity } from '../users/users.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  public async signUp(@Body() newUser: CreateUserDto) {
    const findUser = await this.usersService.findByEmail(newUser.email);
    if (findUser) {
      return new HttpException(
        { status: HttpStatus.CONFLICT, message: `The email: ${newUser.email} is existing.` },
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
