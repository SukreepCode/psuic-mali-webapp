import { UsersEntity } from '../users/users.entity';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class RolesEntity {

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