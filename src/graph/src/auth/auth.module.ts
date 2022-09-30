import {TokenResolver} from "./resolvers/token.resolver";
import {Module} from "@nestjs/common";

@Module({
    imports: [],
    providers: [TokenResolver],
})
export class AuthModule {

}
