import { Body, Controller, Get, Post } from '@nestjs/common';
import { BitcoinService } from 'src/bitcoin/bitcoin.service';
import { SendTransaction } from './dto/sendTransaction.dto';
import { WalletDto } from './dto/wallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private bitcoin: BitcoinService) {}

  @Post('create_wallet')
  createWallet(@Body() dto: WalletDto) {
    console.log(dto);
  }

  @Get('get_address')
  getAddress() {
    console.log('Get Address');
  }

  @Post('send_transaction')
  sendTransaction(@Body() dto: SendTransaction) {
    console.log(dto);
  }

  @Get('get_balance')
  getBalance() {
    console.log('Get Balance');
  }

  @Get('get_transactions')
  getTransactions() {
    console.log('get transactions');
  }
}
