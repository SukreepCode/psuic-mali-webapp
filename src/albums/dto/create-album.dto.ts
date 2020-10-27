import { ApiProperty } from '@nestjs/swagger';

export class CreateAlbumDto {
    @ApiProperty({
        example: 'Travel',
        description: 'The title of album',
    })
    title: string;

    @ApiProperty()
    remark: string;
}