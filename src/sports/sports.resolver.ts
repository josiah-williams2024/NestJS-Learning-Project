import { Query, Resolver } from '@nestjs/graphql';
import { SportsService } from './sports.service';
import { Sport } from './sports.model';

@Resolver()
export class SportsResolver {
  constructor(private readonly sportService: SportsService) {}
  @Query(() => [Sport])
  sports(): Sport[] {
    return this.sportService.findAll();
  }
}
