import {
  Controller, Post, Body, HttpException, HttpStatus, Logger,
} from '@nestjs/common';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../users.dto';
import { assignObject } from '../../app/utils';
import { UsersEntity } from '../users.entity';

@Controller('authentication')
export class AuthenticationController {
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
      // role: "student"
    };

    const user: UsersEntity = assignObject(new UsersEntity(), createUser);
    return await this.usersService.createOrUpdate(user);
  }
}
