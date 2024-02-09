import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TweetEntityMongo,
  TweetEntityMongoSchema,
} from './application/entities/tweet.entity.mongo';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TweetEntityMongo.name,
        schema: TweetEntityMongoSchema,
      },
    ]),
  ],
})
export class TweetModule {}
