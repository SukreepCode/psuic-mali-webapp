import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { SemestersSeed } from '../seeds/semesters.seed';
import { SemestersEntity } from '../../semesters/semesters.entity';

export class initSemester1604145373028 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository(SemestersEntity).save(SemestersSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }
}
