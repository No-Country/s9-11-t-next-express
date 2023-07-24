import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsMongoId, IsNotEmpty, IsString, MinLength } from 'class-validator'
import { Category } from 'src/categories/entities/category.entity'

export class CreateSubcategoryDto {
  @ApiProperty({
    type: String,
    description: 'name',
    required: true,
    example: 'Smatphones',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string

  @ApiProperty({
    type: String,
    description: 'id_category. Ref: Category',
    required: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0908',
  })
  @IsNotEmpty()
  @IsMongoId()
  @Type(() => Category)
  id_category: Category
}
