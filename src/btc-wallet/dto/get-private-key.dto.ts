import { IsString } from 'class-validator';

export class GetPrivateKeyDto {
  @IsString()
  wallet_id: string;

  @IsString()
  passphrase: string;

  @IsString()
  address: string;
}
