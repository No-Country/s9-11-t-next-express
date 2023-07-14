import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Category } from 'src/categories/entities/category.entity'
import { Subcategory } from 'src/subcategories/entities/subcategory.entity'
import { User } from 'src/users/entities/user.entity'

export type ProductDocument = HydratedDocument<Product>

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, index: true })
  name: string

  @Prop({ required: true })
  price: number

  @Prop({ default: null })
  description: string

  @Prop({ default: null })
  characteristics: string[]

  @Prop({ default: 1 })
  stock: number

  //TODO: Create a separated entity for images
  @Prop({ default: null })
  images: string[]

  //TODO: Create a separated entity for qualification
  @Prop({ default: null })
  qualification: number

  @Prop({
    default: true,
  })
  active: boolean

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  id_user: User

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  id_category: Category

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true,
  })
  id_subcategory: Subcategory
}

export const ProductSchema = SchemaFactory.createForClass(Product)
