import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import mongoose, { HydratedDocument } from 'mongoose'
import { Category } from 'src/categories/entities/category.entity'

export type SubcategoryDocument = HydratedDocument<Subcategory>

@Schema()
export class Subcategory {
  @ApiProperty({
    type: String,
    description: 'name',
    required: true,
    example: 'Smatphones',
  })
  @Prop({ unique: true, required: true, index: true })
  name: string

  @ApiProperty({
    type: String,
    description: 'id_category. Ref: Category',
    required: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0908',
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  id_category: Category
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory)
