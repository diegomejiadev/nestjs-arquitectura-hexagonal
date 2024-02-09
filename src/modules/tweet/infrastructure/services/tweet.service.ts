import { Injectable } from '@nestjs/common';
import { CreateTweetUsecase } from '../../application/usecases/create-tweet.usecase';
import { CreateTweetDto } from '../../domain/dto/create-tweet.dto';

@Injectable()
export class TweetService {
  constructor(private createTweetUsecase: CreateTweetUsecase) {}

  async createTweet(body: CreateTweetDto) {
    const result = await this.createTweetUsecase.handle(body);

    return {
      data: result,
    };
  }
}
