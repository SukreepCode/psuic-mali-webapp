import {
  Controller, Post, Body, Get, Put, Delete, Param, HttpStatus, HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';
import { UsersEntity } from './users.entity';
import { assignObject } from '../app/utils';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // POST /albums
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() newItem: CreateUserDto): Promise<any> {
    const user: UsersEntity = assignObject(new UsersEntity(), newItem);
    const createdUser = await this.usersService.createOrUpdate(user);
    return { success: true, id: createdUser.id };
  }

  @Get() // GET /users
  async findAll(): Promise<UsersEntity[]> {
    return await this.usersService.findAll();
  }

  @Get(':id') // GET /users/123
  async find(@Param('id') id: number): Promise<UsersEntity> {
    return await this.usersService.findById(id);
  }

  @Put(':id') // PUT /users/123
  async update(@Param('id') id: number, @Body() newItem: CreateUserDto): Promise<UsersEntity> {
    let user = await this.usersService.findById(id);
    user = assignObject(user, newItem);
    return await this.usersService.createOrUpdate(user);
  }

  @Delete(':id') // DELETE /users/123
  async delete(@Param('id') id: number): Promise<any> {
    await this.usersService.delete(id);
    return { success: true };
  }
}
