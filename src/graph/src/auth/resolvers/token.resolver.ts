import {Token} from "../models/token";
import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {CredentialsInput} from "../models/credentialsInput";

@Resolver(of => Token)
export class TokenResolver {

    @Mutation(returns => Token)
    async create(
        @Args("credentials") credentials: CredentialsInput
    ): Promise<Token> {
        return {
            jwt: 'test',
            expiresAt: 0
        }
    }

    @Query(returns => Token)
    async get(): Promise<Token> {
        return {
            jwt: 'test',
            expiresAt: 0
        }
    }

}
