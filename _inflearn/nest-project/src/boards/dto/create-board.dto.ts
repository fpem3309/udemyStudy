import { IsNotEmpty } from 'class-validator';
// 유효성 검증(컨트롤러에서 usePipes 해야함)
export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
