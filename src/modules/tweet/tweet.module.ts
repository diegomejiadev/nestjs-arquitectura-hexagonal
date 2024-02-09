import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TweetEntityMongo,
  TweetEntityMongoSchema,
} from './application/entities/tweet.entity.mongo';
import { CreateTweetUsecase } from './application/usecases/create-tweet.usecase';
import { TweetDatasourceMongo } from './application/datasources/tweet.datasource.mongo';
import { TweetService } from './infrastructure/services/tweet.service';
import { TweetController } from './infrastructure/controllers/tweet.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TweetEntityMongo.name,
        schema: TweetEntityMongoSchema,
      },
    ]),
  ],
  providers: [
    CreateTweetUsecase,
    {
      provide: 'TWEET_REPOSITORY',
      useClass: TweetDatasourceMongo,
    },
    TweetService,
  ],
  controllers: [TweetController],
})
export class TweetModule {}
