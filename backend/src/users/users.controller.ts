import { Controller, Get } from '@nestjs/common';
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
}
