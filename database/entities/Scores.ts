import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('scores')
export class ScoresEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  game_id?: number;

  @Column()
  faction?: string;

  @Column()
  player_type?: string;

  @Column()
  turn_1?: number;

  @Column()
  turn_2?: number;

  @Column()
  turn_3?: number;

  @Column()
  turn_4?: number;

  @Column()
  turn_5?: number;

  @Column()
  turn_6?: number;

  @Column()
  turn_7?: number;

  @Column()
  turn_8?: number;

  @Column()
  turn_9?: number;

  @Column()
  turn_10?: number;

  @Column()
  turn_11?: number;

  @Column()
  turn_12_plus?: number;

  @Column()
  victory?: boolean;

  @Column()
  dominance_used?: boolean;
}
