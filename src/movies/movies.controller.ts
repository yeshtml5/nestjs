import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll() {
    return this.movieService.getAll();
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }
  /**
   *
   * @param searchingYear
   * @returns
   */
  @Get('/search')
  searcch(@Query('year') searchingYear: string) {
    return `we are aearcning for ${searchingYear}`;
  }

  @Delete(`/:id`)
  remove(@Param('id') movieId: string) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch(`/:id`)
  pathch(@Param('id') movieId: string, @Body() updateData) {
    return this.movieService.update(movieId, updateData);
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return this.movieService.getOne(movieId);
  }
}
