import { Global, Module } from '@nestjs/common';
import { Logger } from './app.service';
import { WinstonModule } from 'nest-winston';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { loggerConfigFactory } from './factories';

@Global()
@Module({
  imports: [
    WinstonModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      useFactory: loggerConfigFactory,
      inject: [ConfigService],
    }),
  ],
  providers: [Logger],
  exports: [Logger],
})
export class LoggerModule {}
