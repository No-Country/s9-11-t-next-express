import { Type } from 'class-transformer'
import { IsMongoId, IsNotEmpty, IsString, MinLength } from 'class-validator'
import { Category } from 'src/categories/entities/category.entity'

export class CreateSubcategoryDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string
  @IsNotEmpty()
  @IsMongoId()
  @Type(() => Category)
  id_category: Category
}
