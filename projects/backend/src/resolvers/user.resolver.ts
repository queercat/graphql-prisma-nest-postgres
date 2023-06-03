import { Args, Int, Mutation, OmitType, Query, Resolver } from "@nestjs/graphql";
import { User } from "src/models/user.model";
import { UserService } from "src/services/user.service";

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    const user = await this.userService.findOne({
      id: id,
    })

    if (!user) {
      throw new Error(`No user found with id: ${id}`)
    }

    return user
  }

  @Query(returns => User)
  async userByName(@Args('name') name: string) {
    const user = await this.userService.findOne({
      name: name,
    })

    if (!user) {
      throw new Error(`No user found with name: ${name}`)
    }

    return user
  }


  @Mutation(returns => User)
  async createUser(@Args('name') name: string, @Args('password') password: string) {
    const hashedPassword = await this.userService.hashPassword(password)

    let user = await this.userService.create({
      name,
      password: hashedPassword,
    })

    const { password: _, ...result } = user

    return result
  }
}
