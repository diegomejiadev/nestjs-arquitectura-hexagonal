import {
  HttpException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ITweetDatasource } from '../../domain/datasources/tweet.datasource';
import { CreateTweetDto } from '../../domain/dto/create-tweet.dto';

@Injectable()
export class CreateTweetUsecase {
  constructor(
    @Inject('TWEET_REPOSITORY') private tweetDatasource: ITweetDatasource,
  ) {}

  async handle(body: CreateTweetDto) {
    try {
      return await this.tweetDatasource.create(body);
    } catch (error) {
      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException('Internal server error');
    }
  }
}
