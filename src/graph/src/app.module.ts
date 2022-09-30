import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {AuthModule} from "./auth/auth.module";

@Module({
    imports: [
        AuthModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            debug: false,
            playground: true,
            autoSchemaFile: true
        }),
    ],
})
export class AppModule {
}
