import { IsString } from 'class-validator';

export class GetWalletInfo {
  @IsString()
  wallet_id: string;
}
