import { IsString } from 'class-validator';

export class WalletDto {
  @IsString()
  wallet_name: string;
}
