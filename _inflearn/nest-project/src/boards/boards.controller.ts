import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('boards')
@UseGuards(AuthGuard()) // 컨트롤러 레벨 가드
export class BoardsController {
  private logger = new Logger('BoardController'); // Logger객체
  constructor(private boardService: BoardsService) { }

  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardService.getAllBoard();
  // }
  @Get()
  getAllBoard(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards`);
    return this.boardService.getAllBoard(user);
  }

  // @Post()
  // @UsePipes(ValidationPipe) // 유효성 검증(핸들러 레벨 파이프)
  // createBoard(
  //   // @Body('title') title: string, // Body() = req.body와 같음, 괄호안에 인수넣으면 req.body.인수 와 같음
  //   // @Body('description') description: string,
  //   @Body() createBoardDto: CreateBoardDto,
  // ): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }
  @Post()
  @UsePipes(ValidationPipe) // 유효성 검증(핸들러 레벨 파이프)
  createBoard(@Body() createBoardDto: CreateBoardDto,
    @GetUser() user: User, // 커스텀 데코레이터
  ): Promise<Board> {
    this.logger.verbose(
      `User ${user.username} creating a new board. Payload: ${JSON.stringify(
        createBoardDto,
      )}`,
    );
    return this.boardService.createBoard(createBoardDto, user);
  }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardService.deleteBoard(id);
  // }
  @Delete('/:id')
  // 파라미터 레벨 파이프
  deleteBoard(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User, // 커스텀 데코레이터
  ): Promise<void> {
    return this.boardService.deleteBoard(id, user);
  }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus, // 커스텀파이프로 유효성 검증(핸들러 레벨 파이프)
  // ) {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number, // 파라미터 레벨 파이프
    @Body('status', BoardStatusValidationPipe) status: BoardStatus, // 핸들러 레벨 파이프
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status);
  }
}
