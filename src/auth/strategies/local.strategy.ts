import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Injectable } from "@nestjs/common/";
import { AuthService } from "../auth.service";
import { UnauthorizedException } from "@nestjs/common";
import { MessagesHelper } from "src/helpers/messages.helper";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({usernamefield: 'email'})
  }

  async validate(email: string, password:string) {
    const user = await this.authService.validateUser(email, password);

    if(!user) 
      throw new UnauthorizedException(MessagesHelper.PASSWORD_OR_EMAIL_INVALID)

    return user;
  }

}