import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aiprofiles')
export class AIProfilesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  user_id?: number;

  @Column()
  placeholder_boolean?: boolean;

  @Column()
  placeholder_string?: string;

  @Column()
  placeholder_number_1?: number;

  @Column()
  placeholder_number_2?: number;
}
