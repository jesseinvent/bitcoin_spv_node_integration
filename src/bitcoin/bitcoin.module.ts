import { Module } from '@nestjs/common';
import { BitcoinService } from './bitcoin.service';

@Module({
  providers: [BitcoinService],
  exports: [BitcoinService],
})
export class BitcoinModule {}
