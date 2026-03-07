import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { Film } from './film.entity';

@Controller('films')
export class FilmsController {
    constructor(private filmsService: FilmsService) {}

    @Post()
    async create(@Body() body: Partial<Film>): Promise<Film> {
        return this.filmsService.create(body);
    }

    @Get()
    async findAll(@Query('title') title: string) : Promise<Film[]> {
        return this.filmsService.getByTitle(title);
    }
}
