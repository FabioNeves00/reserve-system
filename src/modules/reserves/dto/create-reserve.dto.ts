import { Remove, Replace } from 'src/@types/helpers';
import { Reserve } from '../entities/reserve.entity';
import { IsDateString, IsNumber } from 'class-validator';

export class CreateReserveDto
  implements Replace<Remove<Reserve, 'id' | 'createdAt'>, { table: number }>
{
  @IsNumber()
  table: number;

  @IsDateString()
  scheduledTo: Date;
}
