import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './list.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { CreateListDto } from './dto/create-list.dto';

@Injectable()
export class ListsService {
    constructor(
        @InjectRepository(List)
        private readonly listRepository: Repository<List>,
        private readonly usersService: UsersService,
    ) { }

    async findAllByUserId(userId: number): Promise<List[]> {
        const user = await this.usersService.findById(userId);
        return await this.listRepository.find(
            {
                where: { user },
                relations: { user: true }
            })
    }

    async create(createListDto: CreateListDto): Promise<List> {
        const list = this.listRepository.create(createListDto);
        console.log("list: ", list);
        
        return await this.listRepository.save(list);
    }
}
