import { Table } from './../../tables/entities/table.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('reserves')
export class Reserve {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Table, (_table) => _table.reserves)
  table: Table;

  @CreateDateColumn()
  createdAt: Date;

  @Column('date')
  scheduledTo: Date;
}
