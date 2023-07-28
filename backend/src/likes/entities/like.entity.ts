import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import mongoose, { Document, HydratedDocument } from 'mongoose'

export type LikesDocument = HydratedDocument<Like>

@Schema()
export class Like extends Document {
  @ApiProperty({
    type: String,
    description: 'Product ID | ref:Product',
    required: true,
    uniqueItems: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce6531e0357',
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
    index: true,
  })
  product_id: string

  @ApiProperty({
    type: String,
    description: 'User ID | ref: User',
    required: true,
    uniqueItems: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0908',
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  })
  user_id: string
}

export const LikeSchema = SchemaFactory.createForClass(Like)
LikeSchema.index({ user_id: 1, product_id: 1 }, { unique: true })
