

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { RolesEntity } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RolesEntity)
    private readonly repo: Repository<RolesEntity>,
  ) {}

  async createOrUpdate(item: RolesEntity): Promise<RolesEntity> {
    return await this.repo.save(item);
  }

  async findById(id: string): Promise<RolesEntity> {
    return await this.repo.findOne({ id });
  }

  async findAll(): Promise<RolesEntity[]> {
    return await this.repo.find();
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repo.delete({ id });
  }
}