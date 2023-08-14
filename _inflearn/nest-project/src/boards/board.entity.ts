import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/auth/user.entity';

// 데이터베이스 테이블로 변환되는 Class라서 클래스 생성 후 컬럼 정의
@Entity() // 해당 클래스가 엔티티임을 나타냄
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn() // primary키
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  @ManyToOne(type => User, user => user.boards, { eager: false })
  user: User;
}
