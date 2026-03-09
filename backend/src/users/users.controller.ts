import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { SupabaseService } from 'src/supabase/supabase.service';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService,
        private readonly supabaseService: SupabaseService
    ) { }

    @Get()
    async findAllUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<User> {
        return this.usersService.findById(id);
    }
}
