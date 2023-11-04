import { IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "src/helpers/regex.helper";

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password)
  password: string
}