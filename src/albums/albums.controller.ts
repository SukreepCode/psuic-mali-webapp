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
  import { AlbumsService } from './albums.service';
  import { CreateAlbumDto } from './dto/create-album.dto';
  import { AlbumsEntity } from './albums.entity';
  
  @Controller('albums')
  export class AlbumsController {
    constructor(private readonly albumService: AlbumsService) {}
  
    @Post() // POST /albums
    @HttpCode(HttpStatus.CREATED)
    async createAlbum(@Body() newAlbum: CreateAlbumDto): Promise<AlbumsEntity> {
      const album = new AlbumsEntity();
      album.title = newAlbum.title;
      album.remark = newAlbum.remark;
      return await this.albumService.createOrUpdate(album);
    }
  
    @Get() // GET /albums
    async findAlbums(): Promise<AlbumsEntity[]> {
      return await this.albumService.findAll();
    }
  
    @Get(':id') // GET /albums/123
    async findAlbum(@Param('id') id: number): Promise<AlbumsEntity> {
      return await this.albumService.findOne(id);
    }
  
    @Put(':id') // PUT /albums/123
    async updateAlbum(
      @Param('id') id: number,
      @Body() createAlbumDto: CreateAlbumDto,
    ): Promise<AlbumsEntity> {
      const album = await this.albumService.findOne(id);
      album.title = createAlbumDto.title;
      album.remark = createAlbumDto.remark;
      return await this.albumService.createOrUpdate(album);
    }
  
    @Delete(':id')  // DELETE /albums/123
    async deleteAlbum(@Param('id') id: number): Promise<any> {
      await this.albumService.delete(id);
      return { success: true };
    }
  }