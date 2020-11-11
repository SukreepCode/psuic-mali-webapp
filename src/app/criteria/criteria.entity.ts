import {
  Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany,
} from 'typeorm';
import { SemestersEntity } from '../semesters/semesters.entity';

@Entity()
export class CriteriaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
      () => SemestersEntity,
      (item) => item.id,
    )
    semester: SemestersEntity;
}
