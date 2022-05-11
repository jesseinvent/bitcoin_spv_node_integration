import { IsString } from 'class-validator';

export class CreateWalletDto {
  @IsString()
  wallet_id: string;

  @IsString()
  passphrase: string;

  @IsString()
  address: string;
}
