import { UsersEntity } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Roles {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  title: string;

  // @OneToOne(
  //   (type) => UsersEntity,
  //   (item) => item.id
  // )
  // user: UsersEntity;

}