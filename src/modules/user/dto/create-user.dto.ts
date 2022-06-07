import { IsEmail, IsDefined, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsDefined()
  @IsEmail()
  email: string;
}
