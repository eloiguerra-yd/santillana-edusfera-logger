export type LogLevel = 'critical' | 'error' | 'warn' | 'info';

export interface ILoggerParams {
  level?: LogLevel;
  message?: string;
  file?: string;
  metadata?: any;
  id?: string;
}

export interface ILoggerInfoParams extends ILoggerParams {
  level: 'info';
}

export interface ILogger {
  critical(payload: ILoggerParams): void;
  error(payload: ILoggerParams): void;
  info(payload: ILoggerParams): void;
  warn(payload: ILoggerParams): void;
}
