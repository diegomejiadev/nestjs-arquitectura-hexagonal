import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ITweetDatasource } from '../../domain/datasources/tweet.datasource';
import { CreateTweetDto } from '../../domain/dto/create-tweet.dto';
import { TweetEntity } from '../../domain/entities/tweet.entity';
import { InjectModel } from '@nestjs/mongoose';
import { TweetEntityMongo } from '../entities/tweet.entity.mongo';
import { Model } from 'mongoose';

@Injectable()
export class TweetDatasourceMongo implements ITweetDatasource {
  constructor(
    @InjectModel(TweetEntityMongo.name)
    private tweetRepository: Model<TweetEntityMongo>,
  ) {}

  async create(body: CreateTweetDto): Promise<TweetEntity> {
    try {
      const toCreateTweet = new this.tweetRepository({ ...body });

      const createdTweet = await toCreateTweet.save();

      return new TweetEntity()
        .setId(createdTweet.id)
        .setContent(createdTweet.content);
    } catch (e) {
      throw new InternalServerErrorException(
        'Hubo un problema al crear el tweet.',
      );
    }
  }
}
