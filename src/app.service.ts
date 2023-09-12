import { Inject, Injectable } from '@nestjs/common';
import { ILogger, ILoggerParams } from './interface';

@Injectable()
export class Logger implements ILogger {
  constructor(@Inject('winston') private logger: Logger) {}

  critical(payload: ILoggerParams): void {
    this.logger.critical({ level: 'critical', ...payload });
  }
  error(payload: ILoggerParams): void {
    this.logger.error({ level: 'error', ...payload });
  }
  info(payload: ILoggerParams): void {
    this.logger.info({ level: 'info', ...payload });
  }
  warn(payload: ILoggerParams): void {
    this.logger.warn({ level: 'warn', ...payload });
  }
}
