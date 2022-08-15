import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppResolver { 
  @Query(returns => String)
  async apiVersion() {
    return '1.0'
  }
}