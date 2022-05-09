import { IsString } from 'class-validator';

export class SendTransaction {
  @IsString()
  wallet_name: string;
}
