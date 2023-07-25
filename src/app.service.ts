import { Inject, Injectable, Scope } from '@nestjs/common';
import { ILogger, ILoggerParams } from './interface';
import { randomUUID } from 'crypto';

@Injectable({ scope: Scope.REQUEST })
export class Logger implements ILogger {
  private id: string;
  constructor(@Inject('winston') private logger: Logger) {
    this.id = randomUUID();
  }

  critical(payload: ILoggerParams): void {
    this.logger.critical({ id: this.id, ...payload });
  }
  error(payload: ILoggerParams): void {
    this.logger.error({ id: this.id, ...payload });
  }
  info(payload: ILoggerParams): void {
    this.logger.info({ id: this.id, ...payload });
  }
  warn(payload: ILoggerParams): void {
    this.logger.warn({ id: this.id, ...payload });
  }
}
