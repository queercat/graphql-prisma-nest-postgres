import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(type => Int)
  id: number

  @Field(type => String)
  username: string

  @Field(type => String)
  password: string
}
