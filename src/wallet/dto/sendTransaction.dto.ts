import { IsString } from 'class-validator';

export class SendTransaction {
  @IsString()
  wallet_id: string;
}
