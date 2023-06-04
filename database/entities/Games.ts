import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('games')
export class GamesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  user_id?: number;

  @Column()
  player_count?: number;
}
