import { Module } from '@nestjs/common';
import { ConfigurationService } from './config.service';

@Module({
  providers: [ConfigurationService],
})
export class ConfigurationModule {}
