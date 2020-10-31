import {
    Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToOne, OneToMany,
} from 'typeorm';

@Entity()
export class SemestersEntity {
    @PrimaryColumn()
    id: string;

}
