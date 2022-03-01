import { HttpException } from '@nestjs/common';

export class AppException extends HttpException {
  private root?: Error;
}
