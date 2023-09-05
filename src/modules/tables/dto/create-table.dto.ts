import { IsBoolean } from 'class-validator';
import { Table } from '../entities/table.entity';
import { Remove } from 'src/@types/helpers';

export class CreateTableDto implements Remove<Table, 'id' | 'reserves'> {
  @IsBoolean()
  isNearWindow: boolean;
  @IsBoolean()
  isNearKitchen: boolean;
}
