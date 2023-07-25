import { ConfigService } from '@nestjs/config';
import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import { ILoggerParams } from './interface';

export const loggerConfigFactory = (
  config: ConfigService,
): WinstonModuleOptions => {
  return {
    levels: {
      error: 0,
      critical: 1,
      warn: 2,
      info: 3,
    },
    level: 'info',
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.printf((info: ILoggerParams) => {
            const file = info.file ? `file: ${info.file} ` : '';
            const id = info.id ? `id: ${info.id} ` : '';
            const message = info.message ? `message: ${info.message} ` : '';
            const metadata = info.metadata;

            return `${file} ${id} ${message} ${JSON.stringify(
              metadata,
              null,
              2,
            )}`;
          }),
        ),
      }),
    ],
  };
};
