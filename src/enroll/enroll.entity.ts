import { SemestersEntity } from '../semesters/semesters.entity';
import { UsersEntity } from '../users/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { RolesEntity } from '../roles/roles.entity';

@Entity()
export class EnrollEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => UsersEntity, (user) => user.id)
    user: UsersEntity;

    @ManyToOne((type) => SemestersEntity, (semester) => semester.id)
    semester: SemestersEntity;
}
