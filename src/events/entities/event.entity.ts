import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  descripcion: string;

  @Column()
  cover: string;
}
