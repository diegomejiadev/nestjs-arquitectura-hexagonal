import { CreateTweetDto } from '../dto/create-tweet.dto';
import { TweetEntity } from '../entities/tweet.entity';

export interface ITweetDatasource {
  create(body: CreateTweetDto): Promise<TweetEntity>;
}
