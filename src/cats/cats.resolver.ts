import { Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Cat } from './cats.model';

@Resolver()
export class CatsResolver {
  //Same way for php to define class var in the constructor
  constructor(private readonly catService: CatsService) {}
  @Query(() => [Cat])
  cats(): Cat[] {
    return this.catService.findAll();
  }
}
