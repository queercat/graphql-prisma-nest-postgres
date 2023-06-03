import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType('User')
export class User {
  @Field(type => Int)
  id: number

  @Field(type => String)
  name: string

  @Field(type => String)
  password: string
}
