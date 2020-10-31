import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Delete,
    Param,
    HttpStatus,
    HttpCode,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { CreateUserDto } from './dto/create-user.dto';
  import { Users } from './users.entity';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Post() // POST /albums
    @HttpCode(HttpStatus.CREATED)
    async createAlbum(@Body() newItem: CreateUserDto): Promise<any> {
      const user = new Users();
      user.displayID = newItem.displayID;
      user.name = newItem.name;
      user.email = newItem.email;
      const createdUser = await this.usersService.createOrUpdate(user);
      return { success: true, id: createdUser.id };
    }
  
    @Get() // GET /users
    async findAlbums(): Promise<Users[]> {
      return await this.usersService.findAll();
    }
  
    @Get(':id') // GET /users/123
    async findAlbum(@Param('id') id: number): Promise<Users> {
      return await this.usersService.findOne(id);
    }
  
    @Put(':id') // PUT /users/123
    async updateAlbum(
      @Param('id') id: number,
      @Body() newItem: CreateUserDto,
    ): Promise<Users> {
      const user = await this.usersService.findOne(id);
      user.displayID = newItem.displayID;
      user.name = newItem.name;
      user.email = newItem.email;
      return await this.usersService.createOrUpdate(user);
    }
  
    @Delete(':id')  // DELETE /users/123
    async deleteAlbum(@Param('id') id: number): Promise<any> {
      await this.usersService.delete(id);
      return { success: true };
    }
  }