
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { SemestersEntity } from './semesters.entity';

@Injectable()
export class SemestersService {
  constructor(
    @InjectRepository(SemestersEntity)
    private readonly repo: Repository<SemestersEntity>,
  ) {}

  async createOrUpdate(item: SemestersEntity): Promise<SemestersEntity> {
    return await this.repo.save(item);
  }

  async findById(id: string): Promise<SemestersEntity> {
    return await this.repo.findOne({ id });
  }

  async findAll(): Promise<SemestersEntity[]> {
    return await this.repo.find();
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repo.delete({ id });
  }
}