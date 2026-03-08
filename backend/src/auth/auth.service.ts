import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  private async AssertPasswordIsValid(
    password: string,
    hashedPassword: string,
  ) {
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  private AssertPasswordSet(user: User) {
    if (!user.isPasswordSet) {
      throw new UnauthorizedException(
        'Password not set. Please set up your password first.',
      );
    }
  }

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(email);

    this.AssertPasswordSet(user);
    await this.AssertPasswordIsValid(pass, user.password);

    return {
      access_token: await this.jwtService.signAsync({ user }),
    };
  }

  async setupPassword(userId: number, newPassword: string): Promise<void> {
    const user = await this.usersService.findById(userId);
    user.password = await this.hashPassword(newPassword);
    user.isPasswordSet = true;
    await this.usersService.update(user);
  }
}
