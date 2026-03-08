import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './film.entity';
import { OmdbModule } from 'src/omdb/omdb.module';

@Module({
  imports: [TypeOrmModule.forFeature([Film]), OmdbModule],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
