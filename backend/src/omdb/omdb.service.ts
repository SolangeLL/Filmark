import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { OmdbFilm } from './omdbFilm.entity';

@Injectable()
export class OmdbService {
    private readonly apiUrl = process.env.OMDB_API_URL;

    async getDataByTitle(title: string): Promise<OmdbFilm> {
        const result = await axios.get(`${this.apiUrl}&type=movie&t=${title}`);
        Logger.log("result: ", result)
        const film: OmdbFilm = {
        }

        return result.data;
    }

    async getDataById(dataId: string): Promise<OmdbFilm> {
        return await axios.get(`${this.apiUrl}&type=movie&i=${dataId}`);
    }

    async searchByTitle(title: string): Promise<OmdbFilm[]> {
        return await axios.get(`${this.apiUrl}&type=movie&t=${title}`);
    }
}
