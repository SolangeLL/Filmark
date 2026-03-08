import { IsNotEmpty, IsNumber } from 'class-validator';

export class SetupPasswordDto {
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  password: string;
}
