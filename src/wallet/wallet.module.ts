import { Module } from '@nestjs/common';
import { BitcoinModule } from 'src/bitcoin/bitcoin.module';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

@Module({
  imports: [BitcoinModule],
  controllers: [WalletController],
  providers: [WalletService],
})
export class WalletModule {}
