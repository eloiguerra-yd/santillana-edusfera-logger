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
            const message = info.message ? `message: ${info.message} ` : '';
            const metadata = info.metadata;
            const level = info.level ? `[${info.level$}]` : '[info]';
            const date = new Date().toISOString();

            return JSON.stringify({
              level,
              file,
              message,
              date,
              metadata: JSON.stringify(metadata, null, 2),
            });
          }),
        ),
      }),
    ],
  };
};
