import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto, // Dto 유효성 검증(핸들러 레벨 파이프)
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto, // Dto 유효성 검증(핸들러 레벨 파이프)
  ): Promise<{ accessToken: string }> {
    return this.authService.signin(authCredentialsDto);
  }

  @Post('/authtest')
  @UseGuards(AuthGuard()) // UseGuards - 인증 미들웨어,  AuthGuard - @nestjs/passport모듈 함수
  // Getuser - req객체안의 user를 가져오기 때문에 Guard 아래에 작성
  authtest(@GetUser() user: User) {
    console.log('user', user);
  }
}
