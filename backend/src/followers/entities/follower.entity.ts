import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document, SchemaTypes } from 'mongoose'

export type FollowerDocument = Follower & Document

@Schema()
export class Follower extends Document {
  @ApiProperty({
    type: String,
    description: 'ID of the follower | ref: User',
    required: true,
    format: 'ObjectId',
    example: '60e8a37134f59e001fde6c48',
  })
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  })
  follower_id: string

  @ApiProperty({
    type: String,
    description: 'ID of the follower | ref: User',
    required: true,
    uniqueItems: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0908',
  })
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
