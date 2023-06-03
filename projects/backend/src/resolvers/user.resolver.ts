import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "src/models/user.model";

@Resolver(of => User)
export class UserResolver {
  constructor() {
  }

  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return {
      id: 0,
      username: 'username',
      password: 'password'
    }
  }
}
