import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/app/users/users.service';
import { UserEntity } from 'src/app/users/users.entity';
import { compareSync } from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(email: string, password: string) {
    let user: UserEntity
    try{
      user = await this.userService.findOneOrFail({where: {email} })
    } catch(error){ 
      return null
    }

    const isPasswordValida = compareSync(password, user.passwordHash)
    if (!isPasswordValida) return null

    return user;
  }

}
