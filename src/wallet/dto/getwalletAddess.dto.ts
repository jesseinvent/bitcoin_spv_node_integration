import { IsString } from 'class-validator';

export class GetWalletAddress {
  @IsString()
  wallet_id: string;
}
