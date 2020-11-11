import {
  Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, OneToMany,
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';

@Entity()
export class RolesEntity {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  title: string;
}
