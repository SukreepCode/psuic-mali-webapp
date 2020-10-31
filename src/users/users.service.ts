import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly repo: Repository<UsersEntity>,
  ) {}

  async createOrUpdate(user: UsersEntity): Promise<UsersEntity> {
    return await this.repo.save(user);
  }

  async findById(id: number): Promise<UsersEntity> {
    return await this.repo.findOne({ id });
  }

  async findByEmail(email: string): Promise<UsersEntity> {
    return await this.repo.findOne({ email });
  }

  async findAll(): Promise<UsersEntity[]> {
    return await this.repo.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repo.delete({ id });
  }
}