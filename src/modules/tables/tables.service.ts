import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table)
    private readonly tablesRepository: Repository<Table>,
  ) {}
  async create(createTableDto: CreateTableDto) {
    return await this.tablesRepository.insert(createTableDto);
  }

  async findAll() {
    return await this.tablesRepository.find({ relations: ['reserves'] });
  }

  async findOneOrFail(id: number) {
    const table = await this.tablesRepository.findOne({
      where: { id },
      relations: ['reserves'],
    });
    if (!table) throw new NotFoundException('Table not found.');
    return table;
  }

  async update(id: number, updateTableDto: UpdateTableDto) {
    return await this.tablesRepository.update(id, updateTableDto);
  }

  async remove(id: number) {
    return await this.tablesRepository.delete({ id });
  }
}
