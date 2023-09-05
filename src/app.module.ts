import { Module } from '@nestjs/common';
import { TablesModule } from './modules/tables/tables.module';
import { ReservesModule } from './modules/reserves/reserves.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configurationService } from './config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(configurationService.getTypeOrmConfig()),
    TablesModule,
    ReservesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
