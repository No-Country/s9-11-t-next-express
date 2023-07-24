import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import mongoose, { HydratedDocument, SchemaTypes } from 'mongoose'
import { Category } from 'src/categories/entities/category.entity'
import { Subcategory } from 'src/subcategories/entities/subcategory.entity'
import { User } from 'src/users/entities/user.entity'

export type ProductDocument = HydratedDocument<Product & Document>

@Schema({ timestamps: true })
export class Product {
  @ApiProperty({
    type: String,
    description: 'name',
    required: true,
    example: 'Motorola xxx 000',
  })
  @Prop({ required: true, index: true })
  name: string

  @ApiProperty({
    type: String,
    description: 'price',
    required: true,
    example: 20000,
  })
  @Prop({ required: true })
  price: number

  @ApiProperty({
    type: String,
    description: 'description',
    required: true,
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  })
  @Prop({ default: null })
  description: string

  @ApiProperty({
    type: Array<string>,
    description: 'characteristics',
    required: true,
    example: ['Android 12', 'Memoria Ram 12GB', 'Memoria Interna 128GB'],
  })
  @Prop({ default: null })
  characteristics: string[]

  @ApiProperty({
    type: String,
    description: 'stock',
    required: true,
    example: 12,
  })
  @Prop({ default: 1 })
  stock: number

  @ApiProperty({
    type: Array<{ url: string }>,
    description: 'images',
    required: true,
    example: [
      { url: 'http:img1.png' },
      { url: 'http:img2.png' },
      { url: 'http:img3.png' },
    ],
  })
  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: 'Image' }] })
  images: string[]

  @ApiProperty({
    type: String,
    description: 'qualification',
    required: true,
    example: 5,
  })
  @Prop({ default: null })
  qualification: number

  @ApiProperty({
    type: Boolean,
    description: 'active',
  })
  @Prop({
    default: true,
  })
  active: boolean

  @ApiProperty({
    type: String,
    description: 'id_user',
    required: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0908',
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  id_user: User

  @ApiProperty({
    type: String,
    description: 'id_category',
    required: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0643',
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  id_category: Category

  @ApiProperty({
    type: String,
    description: 'id_subcategory',
    required: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0643',
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true,
  })
  id_subcategory: Subcategory
}

export const ProductSchema = SchemaFactory.createForClass(Product)
