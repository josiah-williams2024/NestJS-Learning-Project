import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  age: number;

  @Field()
  breed: string;
}
