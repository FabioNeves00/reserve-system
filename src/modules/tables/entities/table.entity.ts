import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reserve } from '../../reserves/entities/reserve.entity';

@Entity('tables')
export class Table {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(() => Reserve, (_reserve) => _reserve.table)
  reserves: Reserve[];

  @Column('boolean')
  isNearWindow: boolean;

  @Column('boolean')
  isNearKitchen: boolean;
}
