import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { Category } from 'src/categories/entities/category.entity'

export type SubcategoryDocument = HydratedDocument<Subcategory>

@Schema()
export class Subcategory {
  @Prop({ unique: true, required: true, index: true })
  name: string

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  id_category: Category
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory)
