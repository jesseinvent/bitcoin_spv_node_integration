import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetPrivateKey } from 'src/bitcoin/interfaces/getPrivateKey.interface';
import { GetWalletBalance } from './dto/getBalance.dto';
import { GetWalletAddress } from './dto/getwalletAddess.dto';
import { GetWalletInfo } from './dto/getWalletInfo.dto';
import { SendTransaction } from './dto/sendTransaction.dto';
import { CreateWalletDto } from './dto/wallet.dto';
import { WalletService } from './wallet.service';

@Controller('api')
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Post('create-wallet')
  createWallet(@Body() dto: CreateWalletDto) {
    return this.walletService.createWallet({
      wallet_id: dto.wallet_id,
      passphrase: dto.passphrase,
    });
  }

  @Get('get-wallet-address')
  getWalletAddress(@Body() dto: GetWalletAddress) {
    return this.walletService.getWalletAddress(dto.wallet_id);
  }

  @Get('get-wallet-info')
  getWalletInfo(@Body() dto: GetWalletInfo) {
    return this.walletService.getWalletInfo(dto.wallet_id);
  }

  @Get('get-wallet-balance')
  getBalance(@Body() dto: GetWalletBalance) {
    return this.walletService.getWalletInfo(dto.wallet_id);
  }

  @Get('get-wallet-privatekey')
  getPrivateKey(@Body() dto: GetPrivateKey) {
    return this.walletService.getPrivateKey({
      wallet_id: dto.wallet_id,
      passphrase: dto.passphrase,
      address: dto.address,
    });
  }

  @Post('send-to-address')
  sendTransaction(@Body() dto: SendTransaction) {
    console.log(dto);
  }

  @Get('get-transactions')
  getTransactions() {
    console.log('get transactions');
  }
}
