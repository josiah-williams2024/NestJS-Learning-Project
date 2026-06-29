import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Hobby {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
