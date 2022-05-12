import { Injectable } from '@nestjs/common';
import * as winston from 'winston';

@Injectable()
export class LoggerService {
  private commonAppLogTransport = new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
  });
  private errorLogTransport = new winston.transports.File({
    level: 'error',
    filename: 'logs/errors.log',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
      winston.format.json(),
    ),
  });

  private infoAppLogTransport = new winston.transports.File({
    level: 'info',
    filename: 'logs/app.log',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
      winston.format.json(),
    ),
  });

  //   sentryHttpTransport = new Sentry({
  //     config: {
  //       dsn: configs.SENTRY_DNS,
  //     },
  //   });

  private logger = winston.createLogger({
    format: winston.format.json(),
    transports: [this.commonAppLogTransport],
  });

  // if (process.env.NODE_ENV === 'production') {
  //   logger.add(this.infoAppLogTransport);
  //   logger.add(this.errorLogTransport);
  //   //   logger.add(sentryHttpTransport);
  // }

  error(error: any) {
    return this.logger.error(error);
  }

  info(msg: string) {
    return this.logger.info(msg);
  }

  json(msg: any) {
    return this.logger.info(JSON.stringify(msg));
  }
}
