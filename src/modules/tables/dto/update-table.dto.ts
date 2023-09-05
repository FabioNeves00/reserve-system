import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateTableDto {
  @IsOptional()
  @IsBoolean()
  isNearWindow?: boolean;

  @IsOptional()
  @IsBoolean()
  isNearKitchen?: boolean;
}
