import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ApiRequest } from './interfaces/apiRequest.interface';
import { CreateBitcoinWallet } from './interfaces/createWallet.interface';
import { GetPrivateKey } from './interfaces/getPrivateKey.interface';
import { RpcRequest } from './interfaces/rpcRequest.interface';

@Injectable()
export class BitcoinService {
  private BCOIN_BASEURL: string;

  constructor(private httpService: HttpService) {
    const { BCOIN_API_KEY, BCOIN_HOST, BCOIN_PORT } = process.env;
    this.BCOIN_BASEURL = `http://x:${BCOIN_API_KEY}@${BCOIN_HOST}:${BCOIN_PORT}`;
  }

  getBaseUrl(type?: string) {
    if (type && type === 'wallet') {
      const { BCOIN_API_KEY, BCOIN_HOST, BCOIN_WALLET_PORT } = process.env;
      return `http://x:${BCOIN_API_KEY}@${BCOIN_HOST}:${BCOIN_WALLET_PORT}`;
    }

    return this.BCOIN_BASEURL;
  }

  async sendRPCrequest({ method, data, headers }: RpcRequest) {
    const rpcJsonData = JSON.stringify({
      jsonrpc: '1.0',
      id: 'curltext',
      method: data.method,
      params: data.params,
    });

    const rpcUrl = this.BCOIN_BASEURL;
    const result = await firstValueFrom(
      this.httpService.request({
        url: rpcUrl,
        method,
        data: rpcJsonData,
        headers,
      }),
    );

    return result.data;
  }

  async sendAPIrequest({ method, data, uri, type }: ApiRequest) {
    // const apiUrl = `${this.BCOIN_BASEURL}/${uri}`;

    const apiUrl = uri
      ? `${this.getBaseUrl(type)}/${uri}`
      : this.getBaseUrl(type);

    console.log(apiUrl);

    const response = await firstValueFrom(
      this.httpService.request({
        url: apiUrl,
        method,
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    );

    return response.data;
  }

  async getNodeInfo() {
    try {
      const response = await this.sendAPIrequest({
        method: 'GET',
      });

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async createWallet({ wallet_id, passphrase }: CreateBitcoinWallet) {
    try {
      const data = {
        passphrase: passphrase,
        witness: false,
      };

      const wallet = await this.sendAPIrequest({
        method: 'PUT',
        data,
        uri: `wallet/${wallet_id}`,
        type: 'wallet',
      });

      return wallet;
    } catch (error) {}
  }

  async getWalletAddress(wallet_id: string) {
    try {
      const result = await this.sendAPIrequest({
        method: 'POST',
        data: { account: 'default' },
        uri: `wallet/${wallet_id}/address`,
        type: 'wallet',
      });

      return result;
    } catch (error) {}
  }

  async getWalletInfo(wallet_id: string) {
    try {
      const result = await this.sendAPIrequest({
        method: 'GET',
        uri: `/wallet/${wallet_id}`,
        type: 'wallet',
      });

      return result;
    } catch (error) {}
  }

  async getBalance(wallet_id: string) {
    try {
      const result = await this.sendAPIrequest({
        method: 'GET',
        uri: `/wallet/${wallet_id}/balance`,
        type: 'wallet',
      });

      return result;
    } catch (error) {}
  }

  async getPrivateKeyByAddress({
    wallet_id,
    passphrase,
    address,
  }: GetPrivateKey) {
    try {
      const result = await this.sendAPIrequest({
        method: 'GET',
        uri: `/wallet/${wallet_id}/wif/${address}?passphrase=${passphrase}`,
        type: 'wallet',
      });

      return result;
    } catch (error) {}
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
