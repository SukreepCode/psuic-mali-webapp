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
import { RolesEntity } from '../roles/roles.entity';

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

  // @ManyToMany(type => RolesEntity)
  // @JoinTable()
  // role: RolesEntity;

  @ManyToOne(
    () => RolesEntity,
    (item) => item.id,
  )
  role: RolesEntity;

  @OneToMany((type) => EnrollEntity, (enroll) => enroll.id)
  enroll: EnrollEntity;

  // For MySQL
  // @CreateDateColumn({ type: "timestamp" })
  // createdAt: Date;

  // @UpdateDateColumn({ type: "timestamp" })
  // updatedAt: Date;
}
