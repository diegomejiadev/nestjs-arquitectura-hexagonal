import { Body, Controller, Post } from '@nestjs/common';
import { TweetService } from '../services/tweet.service';
import { CreateTweetDto } from '../../domain/dto/create-tweet.dto';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Post()
  create(@Body() body: CreateTweetDto) {
    return this.tweetService.createTweet(body);
  }
}
