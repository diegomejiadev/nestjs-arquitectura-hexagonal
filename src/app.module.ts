import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TweetModule } from './modules/tweet/tweet.module';
import { validate } from './core/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      validate,
    }),
    DatabaseModule,
    TweetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
