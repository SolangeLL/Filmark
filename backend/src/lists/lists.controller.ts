import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ListsService } from './lists.service';
import { List } from './list.entity';
import { CreateListDto } from './dto/create-list.dto';

@Controller('lists')
export class ListsController {
    constructor(
        private readonly listsService: ListsService,
    ) { }

    // User Auth guard to get user id from token
    @Get()
    async findAllByUserId(): Promise<List[]> {
        return this.listsService.findAllByUserId(2);
    }

    // User Auth guard to get user id from token
    @Post()
    async create(@Body() createListDto: CreateListDto): Promise<List> {
        return this.listsService.create(createListDto);
    }
}
