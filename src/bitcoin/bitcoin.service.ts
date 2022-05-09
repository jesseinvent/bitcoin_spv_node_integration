import { Injectable } from '@nestjs/common';

@Injectable()
export class BitcoinService {
  private network;
  constructor(params) {
    this.network = '';
  }
  createWallet() {}

  getWalletAddress() {}

  sendBTC() {}

  getBalance() {}

  getTransactions() {}
}
