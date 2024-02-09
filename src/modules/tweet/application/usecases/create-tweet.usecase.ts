import { Inject, Injectable } from '@nestjs/common';
import { ITweetDatasource } from '../../domain/datasources/tweet.datasource';
import { CreateTweetDto } from '../../domain/dto/create-tweet.dto';

@Injectable()
export class CreateTweetUsecase {
  constructor(
    @Inject('TWEET_REPOSITORY') private tweetDatasource: ITweetDatasource,
  ) {}

  async handle(body: CreateTweetDto) {
    const result = await this.tweetDatasource.create(body);

    return {
      data: result,
    };
  }
}
