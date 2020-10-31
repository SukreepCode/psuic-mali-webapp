import {
    Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, OneToMany,
} from 'typeorm';

@Entity()
export class EvaluationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    
}
