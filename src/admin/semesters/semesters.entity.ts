import { EnrollEntity } from '../enroll/enroll.entity';
import {
  Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, OneToMany,
} from 'typeorm';

@Entity()
export class SemestersEntity {
    @PrimaryColumn()
    id: string;

    @OneToMany((type) => EnrollEntity, (enroll) => enroll.id)
    enroll: EnrollEntity;
}
