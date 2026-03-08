import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dtos/sign-in-user.dto';
import { SetupPasswordDto } from './dtos/setup-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInUserDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Put('setup-password')
  setupPassword(@Body() setupPasswordDto: SetupPasswordDto) {
    return this.authService.setupPassword(
      setupPasswordDto.userId,
      setupPasswordDto.password,
    );
  }
}
