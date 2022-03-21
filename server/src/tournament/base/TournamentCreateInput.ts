/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MatchCreateNestedManyWithoutTournamentsInput } from "./MatchCreateNestedManyWithoutTournamentsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { SignupCreateNestedManyWithoutTournamentsInput } from "./SignupCreateNestedManyWithoutTournamentsInput";
@InputType()
class TournamentCreateInput {
  @ApiProperty({
    required: false,
    type: () => MatchCreateNestedManyWithoutTournamentsInput,
  })
  @ValidateNested()
  @Type(() => MatchCreateNestedManyWithoutTournamentsInput)
  @IsOptional()
  @Field(() => MatchCreateNestedManyWithoutTournamentsInput, {
    nullable: true,
  })
  matches?: MatchCreateNestedManyWithoutTournamentsInput;

  @ApiProperty({
    required: false,
    type: () => SignupCreateNestedManyWithoutTournamentsInput,
  })
  @ValidateNested()
  @Type(() => SignupCreateNestedManyWithoutTournamentsInput)
  @IsOptional()
  @Field(() => SignupCreateNestedManyWithoutTournamentsInput, {
    nullable: true,
  })
  signups?: SignupCreateNestedManyWithoutTournamentsInput;
}
export { TournamentCreateInput };
