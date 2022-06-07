import { plainToClass } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  validateSync,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Environment } from 'src/types';

class EnvironmentVariables {
  @IsNotEmpty()
  @IsEnum(Environment)
  APP_ENV: Environment;

  @IsNotEmpty()
  @IsNumber()
  PORT: number;

  @IsNotEmpty()
  @IsString()
  PG_HOST: string;

  @IsNotEmpty()
  @IsString()
  PG_USER: string;

  @IsNotEmpty()
  @IsString()
  PG_PASSWORD: string;

  @IsNotEmpty()
  @IsString()
  PG_DATABASE: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
    validationError: {
      target: false,
    },
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
