import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'tweets',
})
export class TweetEntityMongo {
  @Prop({ required: true })
  content: string;
}

export const TweetEntityMongoSchema =
  SchemaFactory.createForClass(TweetEntityMongo);
