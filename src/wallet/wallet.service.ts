import { Injectable } from '@nestjs/common';
import { BitcoinService } from 'src/bitcoin/bitcoin.service';

@Injectable()
export class WalletService {
  constructor(private bitcoinService: BitcoinService) {}
  async createWallet({
    wallet_id,
    passphrase,
  }: {
    wallet_id: string;
    passphrase: string;
  }) {
    try {
      const result = await this.bitcoinService.createWallet({
        wallet_id,
        passphrase,
      });

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getWalletAddress(wallet_id: string) {
    try {
      const result = await this.bitcoinService.getWalletAddress(wallet_id);
      return result;
    } catch (error) {}
  }

  async getWalletInfo(wallet_id: string) {
    try {
      const result = await this.bitcoinService.getWalletInfo(wallet_id);
      return result;
    } catch (error) {}
  }

  async getBalance(wallet_id: string) {
    try {
      const result = await this.bitcoinService.getBalance(wallet_id);
      return result;
    } catch (error) {}
  }

  async getPrivateKey({ wallet_id, address, passphrase }) {
    const result = await this.bitcoinService.getPrivateKeyByAddress({
      wallet_id,
      address,
      passphrase,
    });
    return result;
  }

  sendBTCtoAddress() {
    console.log('Send BTC');
  }

  getTransactions() {
    console.log('Get transactions');
  }

  getRawTransaction(id) {
    console.log('Get raw transactions');
  }

  decodeRawTransaction(hex) {
    console.log('Decode raw transaction');
  }
}
