import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Roles } from "../roles/roles.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  displayID: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  // @Column({ length: 255, nullable: true })
  // password: string;

  // @OneToOne(
  //   (type) => Roles,
  //   (item) => item.id
  // )
  // role: Roles;
}
