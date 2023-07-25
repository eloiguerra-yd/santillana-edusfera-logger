export interface ILoggerParams {
  message?: string;
  file?: string;
  metadata?: any;
  id?: string;
}

export interface ILogger {
  critical(payload: ILoggerParams): void;
  error(payload: ILoggerParams): void;
  info(payload: ILoggerParams): void;
  warn(payload: ILoggerParams): void;
}
