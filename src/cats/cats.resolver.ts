import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
  @Query(() => [String])
  cats(): string[] {
    return ['Zoey', 'Simba'];
  }
}
