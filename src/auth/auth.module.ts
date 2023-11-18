import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/app/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';


@Module({
  imports: [
   ConfigModule.forRoot(),
   UsersModule, 
   PassportModule,
   JwtModule.register({
    privateKey: process.env.JWT_SECRET_KEY ,
    signOptions: {expiresIn: '60s'}
   })
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
