import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { RolesSeed } from '../seeds/roles.seed';
import { RolesEntity } from '../../roles/roles.entity';

// https://medium.com/@bansalsushil_34403/how-to-seed-typeorm-d9637a5948cc

export class InitMigration1603803908118 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository(RolesEntity).save(RolesSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
