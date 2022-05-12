import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetTransactionDetailsDto } from './dto/get-transaction-details.dto';
import { QueryWalletDto } from './dto/query-wallet.dto';
import { SendTransactionDto } from './dto/send-transaction.dto';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { BTCWalletService } from './btc-wallet.service';
import { GetPrivateKeyDto } from './dto/get-private-key.dto';

@Controller('api')
export class BTCWalletController {
  constructor(private walletService: BTCWalletService) {}

  @Post('create-wallet')
  createWallet(@Body() dto: CreateWalletDto) {
    return this.walletService.createWallet({
      wallet_id: dto.wallet_id,
      passphrase: dto.passphrase,
    });
  }

  @Get('get-wallet-address')
  getWalletAddress(@Body() dto: QueryWalletDto) {
    return this.walletService.getWalletAddress(dto.wallet_id);
  }

  @Get('get-wallet-info')
  getWalletInfo(@Body() dto: QueryWalletDto) {
    return this.walletService.getWalletInfo(dto.wallet_id);
  }

  @Get('get-wallet-balance')
  getBalance(@Body() dto: QueryWalletDto) {
    return this.walletService.getWalletInfo(dto.wallet_id);
  }

  @Get('get-wallet-privatekey')
  getPrivateKey(@Body() dto: GetPrivateKeyDto) {
    return this.walletService.getPrivateKey({
      wallet_id: dto.wallet_id,
      passphrase: dto.passphrase,
      address: dto.address,
    });
  }

  @Post('send-transaction')
  sendTransaction(@Body() dto: SendTransactionDto) {
    return this.walletService.sendTransaction({
      wallet_id: dto.wallet_id,
      passphrase: dto.passphrase,
      rate: dto.rate,
      value: dto.value,
      destination_address: dto.destination_address,
    });
  }

  @Get('get-wallet-transactions')
  getTransactions(@Body() dto: QueryWalletDto) {
    return this.walletService.getTransactions(dto.wallet_id);
  }

  @Get('get-transaction')
  getTransactionDetails(@Body() dto: GetTransactionDetailsDto) {
    return this.walletService.getTransactionDetails({
      wallet_id: dto.wallet_id,
      tx_hash: dto.tx_hash,
    });
  }

  @Get('get-wallet-coins')
  getTCoins(@Body() dto: QueryWalletDto) {
    return this.walletService.getWalletCoins(dto.wallet_id);
  }

  // Get mnemonic
}
