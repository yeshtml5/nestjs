import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [MoviesController, UsersController],
  providers: [],
})
export class AppModule {}
