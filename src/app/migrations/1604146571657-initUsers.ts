import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UsersSeed } from '../seeds/users.seed';
import { UsersEntity } from '../../users/users.entity';
import { assignObject } from '../utils';

export class initUsers1604146571657 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const createUsers: UsersEntity[] = [];
    UsersSeed.forEach((user) => {
      createUsers.push(assignObject(new UsersEntity(), user));
    });
    await getRepository(UsersEntity).save(createUsers);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
