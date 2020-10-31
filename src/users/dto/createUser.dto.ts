import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty()
    displayID: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

}