import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BitcoinModule } from './bitcoin/bitcoin.module';
import { BTCWalletModule } from './btc-wallet/btc-wallet.module';
import { LoggerService } from './services/logger.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BitcoinModule,
    BTCWalletModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
