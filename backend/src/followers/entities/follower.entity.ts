import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, SchemaTypes } from 'mongoose'

export type FollowerDocument = Follower & Document

@Schema()
export class Follower extends Document {
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  })
  follower_id: string

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  })
  following_id: string
}
export const FollowerSchema = SchemaFactory.createForClass(Follower)
FollowerSchema.index({ follower_id: 1, following_id: 1 }, { unique: true })
FollowerSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject.id
    delete returnedObject._id
    delete returnedObject.__v
  },
})
