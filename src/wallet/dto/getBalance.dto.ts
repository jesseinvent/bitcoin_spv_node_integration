import { IsString } from 'class-validator';

export class GetWalletBalance {
  @IsString()
  wallet_id: string;
}
