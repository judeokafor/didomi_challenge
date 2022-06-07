import { IsDefined } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  email: string;
}
