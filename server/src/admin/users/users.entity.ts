import { EnrollEntity } from '../enroll/enroll.entity';
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
  CreateDateColumn,
  UpdateDateColumn,

} from 'typeorm';

type Role = "teacher" | "student";

@Entity()
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: true })
  displayID?: string;

  @Column({ length: 255, nullable: true })
  name?: string;

  @Column({ length: 255 })
  username: string;

  @Column({ default: false })
  admin: boolean;

  @Column()
  password: string;

  @Column()
  role: Role;

  @OneToMany((type) => EnrollEntity, (enroll) => enroll.id)
  enroll: EnrollEntity;

  // For MySQL
  // @CreateDateColumn({ type: "timestamp" })
  // createdAt: Date;

  // @UpdateDateColumn({ type: "timestamp" })
  // updatedAt: Date;
}
