import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
// import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { User } from 'src/auth/user.entity';
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository) // Repository Injection
    private boardRepository: BoardRepository, // private을 사용해서 인자->프로퍼티로 사용됨
  ) { }

  // private boards: Board[] = [];

  // getAllBoard(): Board[] {
  //   return this.boards;
  // }
  async getAllBoard(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');
    query.where('board.userId = :userId', { userId: user.id }); // 쿼리빌더로 where절 쿼리문

    const boards = await query.getMany(); // getMany()로 모든 boards
    // return this.boardRepository.find();
    return boards;
  }

  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     // title: title, -  property와 parameter 이름 같으면 생략가능
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException("Can't find board with id"); // 예외처리
  //   }
  //   return found;
  // }
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Can't find board with id ${id}`); // 예외처리
    }
    return found;
  }

  // deleteBoard(id: string): void {
  //   // 리턴x
  //   const found = this.getBoardById(id); // 없다면 getBoardById()에서 예외처리 됨
  //   this.boards = this.boards.filter((board) => board.id !== found.id); // 같지 않은것만 걸러주기(같은거는 없어지는 효과)
  // }
  async deleteBoard(id: number, user: User): Promise<void> {
    // remove - 반드시 존재하는 아이템을 remove()해야함, 없으면 404 Error
    // delete - 존재하면 삭제, 없으면 아무런 영향 없음
    const result = await this.boardRepository.delete({
      id,
      user: { id: user.id },
    });
    console.log(result);
    if (result.affected === 0) {
      // affected:0이면 해당id 없는 것
      throw new NotFoundException(`Can't not find board with id ${id}`);
    }
  }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id); // 한 게시물 찾아와
  //   board.status = status; // status 바꾸고
  //   return board; // 게시물 리턴
  // }
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id); // 한 게시물 찾아와
    board.status = status; // status 바꾸고

    await this.boardRepository.save(board); // 저장
    return board; // 게시물 리턴
  }
}
