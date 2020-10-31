import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Roles {

  @PrimaryColumn()
  name: string;

  @Column({nullable: true})
  title: string;

  // @OneToOne(
  //   (type) => UsersEntity,
  //   (item) => item.id
  // )
  // user: UsersEntity;

}