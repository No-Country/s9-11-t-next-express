import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { HydratedDocument } from 'mongoose'

export type CategoriesDocument = HydratedDocument<Category>

@Schema()
export class Category {
  @ApiProperty({
    type: String,
    description: 'name',
    required: true,
    example: 'Smatphones',
  })
  @Prop({ unique: true, required: true, index: true })
  name: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)
