import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserve } from './entities/reserve.entity';
import { Repository } from 'typeorm';
import { TablesService } from '../tables/tables.service';

@Injectable()
export class ReservesService {
  constructor(
    @InjectRepository(Reserve)
    private readonly reserveRepository: Repository<Reserve>,
    private readonly tablesService: TablesService,
  ) {}

  async create(createReserveDto: CreateReserveDto) {
    const table = await this.tablesService.findOneOrFail(
      createReserveDto.table,
    );
    return await this.reserveRepository.insert({ ...createReserveDto, table });
  }

  async findAll() {
    return await this.reserveRepository.find({ relations: ['table'] });
  }

  async findOne(id: string) {
    return await this.reserveRepository.findOne({
      where: { id },
      relations: ['table'],
    });
  }

  async remove(id: string) {
    return await this.reserveRepository.delete({ id });
  }
}
