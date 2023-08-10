import { ConfigService } from '@nestjs/config';
import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';

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
          winston.format.ms(),
          winston.format.printf((info) => {
            const file = info.file ? `file: ${info.file} ` : '';
            const id = info.id ? `id: ${info.id} ` : '';
            const message = info.message ? `message: ${info.message} ` : '';
            const metadata = info.metadata;
            const level = info.level ? info.level : 'info';
            const date = `timestamp: ${new Date().toISOString()}`;

            return `[${level}] ${date}\n${file} ${id} ${message} ${JSON.stringify(
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
