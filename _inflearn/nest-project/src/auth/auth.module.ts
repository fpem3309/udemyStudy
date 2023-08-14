import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmExModule } from 'src/typeorm-ex.module';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import * as config from 'config';
const jwtConfig = config.jwt;
@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt', // passport 기본 인증을 jwt로
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || jwtConfig.secret, // 토큰 만들 때 사용하는 Secret텍스트
      signOptions: {
        expiresIn: jwtConfig.expiresIn, // 토큰이 유효한 시간
      },
    }),
    TypeOrmExModule.forCustomRepository([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // JwtStrategy를 auth모듈에서 사용할 수 있게 등록하기
  exports: [JwtStrategy, PassportModule], // JwtStrategy, PassportModule를 다른 모듈에서 사용할 수 있게 등록하기
})
export class AuthModule { }
