import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  // readonly - 접근 가능하지만 변경은 불가
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  // 첫번째 param - 처리가 된 인자의 값
  // 두번째 param - 인자에 대한 메타데이터를 포함한 객체 { metatype: [Function: String], type: 'body', data: 'status' }
  // transform() return값은 Route핸들러로, 예외가 발생하면 클라이언트로
  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      // 리턴없으면 예외발생
      throw new BadRequestException(`${value} isn\'t in the status options`);
    }
    console.log('value', value);
    console.log('metadata', metadata);
    return value;
  }

  private isStatusValid(status: any) {
    // StatusOptions 배열의 값중에 있으면 리턴(PRIVATE 또는 PUBLIC이면 리턴)
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
