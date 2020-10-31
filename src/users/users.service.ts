import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly repo: Repository<Users>,
  ) {}

  async createOrUpdate(user: Users): Promise<Users> {
    return await this.repo.save(user);
  }

  async findOne(id: number): Promise<Users> {
    return await this.repo.findOne({ id: id });
  }

  async findAll(): Promise<Users[]> {
    return await this.repo.find();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repo.delete({ id: id });
  }
}