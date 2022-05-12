import { Module } from '@nestjs/common';
import { BitcoinModule } from 'src/bitcoin/bitcoin.module';
import { LoggerService } from 'src/services/logger.service';
import { BTCWalletController } from './btc-wallet.controller';
import { BTCWalletService } from './btc-wallet.service';

@Module({
  imports: [BitcoinModule],
  controllers: [BTCWalletController],
  providers: [BTCWalletService, LoggerService],
})
export class BTCWalletModule {}
