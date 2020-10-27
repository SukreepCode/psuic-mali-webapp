import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { AlbumsEntity } from './albums.entity';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectRepository(AlbumsEntity)
    private readonly albumRepository: Repository<AlbumsEntity>,
  ) {}

  async createOrUpdate(album: AlbumsEntity): Promise<AlbumsEntity> {
    return await this.albumRepository.save(album);
  }

  async findOne(id: number): Promise<AlbumsEntity> {
    return await this.albumRepository.findOne({ id: id });
  }

  async findAll(): Promise<AlbumsEntity[]> {
    return await this.albumRepository.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.albumRepository.delete({ id: id });
  }
}