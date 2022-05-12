import { IsNumber, IsString } from 'class-validator';

export class SendTransactionDto {
  @IsString()
  wallet_id: string;

  @IsString()
  passphrase: string;

  @IsString()
  destination_address: string;

  @IsNumber()
  rate?: number;

  @IsNumber()
  value: number;
}
