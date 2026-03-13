import { IsArray, IsString } from 'class-validator';

export class CreateListDto {
    @IsString()
    name: string;

    @IsString()
    icon: string;

    @IsArray()
    films: string[];
}
