import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import CatsController from './cats.controller';

@Module({
  controllers: [CatsController],
  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
