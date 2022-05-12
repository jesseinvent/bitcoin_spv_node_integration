import { IsString } from 'class-validator';

export class QueryWalletDto {
  @IsString()
  wallet_id: string;
}
