import { IsString } from 'class-validator';

export class GetTransactionDetailsDto {
  @IsString()
  wallet_id: string;

  @IsString()
  tx_hash: string;
}
