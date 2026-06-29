import { Module } from '@nestjs/common';
import { SportsResolver } from './sports.resolver';
import { SportsService } from './sports.service';

@Module({
  providers: [SportsResolver, SportsService],
})
export class SportsModule {}
