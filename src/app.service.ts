import { Injectable } from '@nestjs/common';
import { BitcoinService } from './bitcoin/bitcoin.service';

@Injectable()
export class AppService {
  constructor(private bitcoinService: BitcoinService) {}
  async getInfo(): Promise<any> {
    const result = await this.bitcoinService.getNodeInfo();
    return { result };
  }
}
