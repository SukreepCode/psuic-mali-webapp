
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CriteriaEntity } from './criteria.entity';

@Injectable()
export class CriteriaService {
  constructor(
    @InjectRepository(CriteriaEntity)
    private readonly repo: Repository<CriteriaEntity>,
  ) {}

  async createOrUpdate(item: CriteriaEntity): Promise<CriteriaEntity> {
    return await this.repo.save(item);
  }

  async findById(id: number): Promise<CriteriaEntity> {
    return await this.repo.findOne({ id });
  }

  async findAll(): Promise<CriteriaEntity[]> {
    return await this.repo.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repo.delete({ id });
  }
}