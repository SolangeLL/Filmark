import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  private AssertUserExists(user: User | null) {
    if (user === null) {
      throw new NotFoundException('User not found');
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    this.AssertUserExists(user);
    return user!;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    this.AssertUserExists(user);
    return user!;
  }

  async update(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
