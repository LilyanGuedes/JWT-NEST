import { IsNotEmpty, Matches } from "class-validator";
import { RegExHelper } from "src/helpers/regex.helper";
import {MessagesHelper} from "../../../helpers/messages.helper"

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password, {message: MessagesHelper.PASSWORD_VALID})
  password: string
}