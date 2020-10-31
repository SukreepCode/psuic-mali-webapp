import { UsersEntity } from '../users/users.entity';
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class RolesEntity {

  @PrimaryColumn()
  id: string;

  @Column({nullable: true})
  title: string;

  // @OneToOne(
  //   (type) => UsersEntity,
  //   (item) => item.id
  // )
  @OneToMany(() => UsersEntity, item => item.id)
  user: UsersEntity[];

}