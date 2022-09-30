import {Field, Int, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Token {

    @Field({nullable: true})
    jwt: string;

    @Field(type => Int)
    expiresAt : number;

}
