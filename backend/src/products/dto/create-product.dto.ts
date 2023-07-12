import { Type } from 'class-transformer'
import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator'
import { Category } from 'src/categories/entities/category.entity'
import { Subcategory } from 'src/subcategories/entities/subcategory.entity'
import { User } from 'src/users/entities/user.entity'

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string

  @IsNotEmpty()
  @IsNumber()
  price: number

  @IsString()
  description: string

  @IsString()
  characteristics: string

  @IsOptional()
  @IsBoolean()
  active: boolean

  @IsNotEmpty()
  @IsMongoId()
  @Type(() => User)
  id_user: User

  @IsNotEmpty()
  @IsMongoId()
  @Type(() => Category)
  id_category: Category

  @IsNotEmpty()
  @IsMongoId()
  @Type(() => Subcategory)
  id_subcategory: Subcategory
}
