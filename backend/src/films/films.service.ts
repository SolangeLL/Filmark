import { Injectable } from '@nestjs/common';
import { Film } from './film.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OmdbService } from 'src/omdb/omdb.service';

@Injectable()
export class FilmsService {
    private readonly films: Film[] = [];

    constructor(
        @InjectRepository(Film)
        private filmRepository: Repository<Film>,
        private omdbService: OmdbService,
    ) {}

    async create(filmData: Partial<Film>): Promise<Film> {
        const film = this.filmRepository.create(filmData);
        return this.filmRepository.save(film);

    }

    async getByTitle(title: string): Promise<any> {
        const film = this.omdbService.getDataByTitle(title);
        return film;
    }

    findAll(): Film[] {
        return this.films;
    }
}
