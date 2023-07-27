import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document, SchemaTypes } from 'mongoose'

export type ReviewDocument = Review & Document

@Schema({ timestamps: true })
export class Review extends Document {
  @ApiProperty({
    type: String,
    description: 'User ID | ref: User',
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
  user_id: string

  @ApiProperty({
    type: String,
    description: 'Product ID | ref:Product',
    required: true,
    uniqueItems: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce6531e0357',
  })
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: 'Product',
    required: true,
    index: true,
  })
  product_id: string

  @ApiProperty({
    type: Number,
    description: 'stars number',
    required: true,
    minimum: 1,
    maximum: 5,
    example: 5,
  })
  @Prop({ min: 1, max: 5, required: true })
  stars: number

  @ApiProperty({
    type: String,
    description: 'comment',
    required: false,
    example: 'Excelente relación precio-calidad',
  })
  @Prop()
  comment?: string
}

export const ReviewSchema = SchemaFactory.createForClass(Review)
ReviewSchema.index({ user_id: 1, product_id: 1 }, { unique: true })
ReviewSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject.id
    delete returnedObject._id
    delete returnedObject.__v
  },
})
