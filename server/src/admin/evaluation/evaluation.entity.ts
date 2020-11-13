import { CriteriaEntity } from 'src/admin/criteria/criteria.entity';
import { SemestersEntity } from 'src/admin/semesters/semesters.entity';
import { UsersEntity } from 'src/admin/users/users.entity';
import {
  Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany,
} from 'typeorm';

@Entity()
export class EvaluationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UsersEntity, (item) => item.id)
    student: UsersEntity;

    @ManyToOne(() => UsersEntity, (item) => item.id)
    evaluator: UsersEntity;

    @ManyToOne(() => CriteriaEntity, (item) => item.id)
    criteria: CriteriaEntity;

    @Column({ default: 0 })
    score_0: number;

    @Column({ default: 0 })
    score_1: number;

    @Column({ default: 0 })
    score_2: number;

    @Column({ default: 0 })
    score_3: number;

    @Column({ default: 0 })
    score_4: number;

    @Column({ default: 0 })
    score_5: number;
}
