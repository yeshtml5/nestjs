import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersController } from './users/users.controller';
import { MoviesService } from './movies/movies.service';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule],
  controllers: [MoviesController, UsersController],
  providers: [MoviesService],
})
export class AppModule {}
