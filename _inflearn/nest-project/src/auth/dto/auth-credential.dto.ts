import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  // 영어랑 숫자만 가능한 유효성
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts English characters and numbers',
  })
  password: string;
}
