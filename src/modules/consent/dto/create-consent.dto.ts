import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsUUID,
  IsEnum,
  ValidateNested,
  IsDefined,
} from 'class-validator';
import { CONSENT_TYPE } from '../entities/consent.entity';

export class Consent {
  @IsEnum(CONSENT_TYPE)
  @IsDefined()
  @IsNotEmpty()
  type: CONSENT_TYPE;

  @IsNotEmpty()
  enabled: boolean;
}

export class User {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}

export class CreateConsentDto {
  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({
    each: true,
  })
  @Type(() => Consent)
  consents: Consent[];
}
