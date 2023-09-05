import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@Controller('reserves')
@ApiSecurity('ApiKey')
@ApiTags('Reserves')
export class ReservesController {
  constructor(private readonly reservesService: ReservesService) {}

  @Post()
  create(@Body() createReserveDto: CreateReserveDto) {
    return this.reservesService.create(createReserveDto);
  }

  @Get()
  findAll() {
    return this.reservesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservesService.remove(id);
  }
}
