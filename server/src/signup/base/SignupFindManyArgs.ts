/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SignupWhereInput } from "./SignupWhereInput";
import { Type } from "class-transformer";
import { SignupOrderByInput } from "./SignupOrderByInput";

@ArgsType()
class SignupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SignupWhereInput,
  })
  @Field(() => SignupWhereInput, { nullable: true })
  @Type(() => SignupWhereInput)
  where?: SignupWhereInput;

  @ApiProperty({
    required: false,
    type: [SignupOrderByInput],
  })
  @Field(() => [SignupOrderByInput], { nullable: true })
  @Type(() => SignupOrderByInput)
  orderBy?: Array<SignupOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SignupFindManyArgs };
