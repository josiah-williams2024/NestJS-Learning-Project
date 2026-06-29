import { Query, Resolver } from '@nestjs/graphql';
import { HobbiesService } from './hobbies.service';
import { Hobby } from './hobbies.model';

@Resolver()
export class HobbiesResolver {
  constructor(private readonly hobbyService: HobbiesService) {}
  @Query(() => [Hobby])
  hobbies(): Hobby[] {
    return this.hobbyService.findAll();
  }
}
