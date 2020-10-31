import {
    Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, OneToMany,
} from 'typeorm';

@Entity()
export class CriteriaEntity {

    @PrimaryGeneratedColumn()
    id: number;
}
