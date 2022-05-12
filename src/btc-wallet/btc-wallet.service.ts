import { Injectable } from '@nestjs/common';
import { BitcoinService } from 'src/bitcoin/bitcoin.service';
import * as bsock from 'bsock';
import { LoggerService } from 'src/services/logger.service';

@Injectable()
export class BTCWalletService {
  constructor(
    private bitcoinService: BitcoinService,
    private logger: LoggerService,
  ) {
    this.listenForEvents();
  }

  listenForEvents() {
    const { BCOIN_API_KEY } = process.env;
    const walletNodeUrl = this.bitcoinService.getBaseUrl('wallet');

    const walletSocket = bsock.connect(walletNodeUrl);

    walletSocket.on('connect', async () => {
      await walletSocket.call('auth', BCOIN_API_KEY);

      await walletSocket.call('join', '*', BCOIN_API_KEY);

      this.logger.info(
        'Established connection to wallet node, listening for event',
      );
    });

    walletSocket.bind('tx', (walletID: any, details: any) => {
      // console.log('New transaction recieved');
      this.logger.info('New transaction recieved');
      this.logger.info(`Wallet ID: ${walletID}`);
      this.logger.json(details);
    });
  }

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

  async sendTransaction({
    wallet_id,
    passphrase,
    rate,
    value,
    destination_address,
  }) {
    const result = await this.bitcoinService.sendTransaction({
      wallet_id,
      passphrase,
      rate,
      value,
      destination_address,
    });

    return result;
  }

  async getTransactions(wallet_id: string) {
    const result = await this.bitcoinService.getWalletTransactions(wallet_id);

    return result;
  }

  async getTransactionDetails({ wallet_id, tx_hash }) {
    const result = await this.bitcoinService.getTransactionsDetails({
      wallet_id,
      tx_hash,
    });

    return result;
  }

  async getWalletCoins(wallet_id: string) {
    const result = await this.bitcoinService.getWalletCoins(wallet_id);

    return result;
  }

  decodeRawTransaction(hex) {
    console.log('Decode raw transaction');
  }
}
