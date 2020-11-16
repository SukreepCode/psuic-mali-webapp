import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsIn, IsNumber } from 'class-validator';
import { Role } from './users.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}

export class UpdateUserDto {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsEmail()
  username: string;

  @ApiProperty()
  @IsString()
  displayID?: string;

  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsIn(['teacher', 'student', 'admin'])
  role: Role;
}