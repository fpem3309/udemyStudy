import { Board } from 'src/boards/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username']) // 데이터베이스에서 검색할 필요 없이 데이터베이스 레벨에서 중복체크 후 에러 발생
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(type => Board, board => board.user, { eager: true }) // eaget: true - user 가져올때 board도 가져올 수 있게
  boards: Board[];
}
