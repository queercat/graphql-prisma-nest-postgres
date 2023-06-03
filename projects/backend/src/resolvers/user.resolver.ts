import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "src/models/user.model";
import { UserService } from "src/services/user.service";

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    try {
      const user = await this.userService.findOne({
        id: id,
      })
      return user
    } catch (e) {
      console.error(e)
      throw e
    }
  }
}
