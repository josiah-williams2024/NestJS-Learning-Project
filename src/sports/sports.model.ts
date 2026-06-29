import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Sport {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  experience: string;
}
