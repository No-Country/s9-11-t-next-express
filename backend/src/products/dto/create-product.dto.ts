import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  IsArray,
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
  @ApiProperty({
    type: String,
    description: 'name',
    required: true,
    example: 'Motorola xxx 000',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string

  @ApiProperty({
    type: String,
    description: 'price',
    required: true,
    example: 20000,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number

  @ApiProperty({
    type: String,
    description: 'description',
    required: true,
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  })
  @IsString()
  description: string

  @ApiProperty({
    type: Array<string>,
    description: 'characteristics',
    required: true,
    example: ['Android 12', 'Memoria Ram 12GB', 'Memoria Interna 128GB'],
  })
  @IsArray()
  @IsString({ each: true })
  characteristics: string[]

  @ApiProperty({
    type: String,
    description: 'stock',
    required: true,
    example: 12,
  })
  @IsNumber()
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
  @IsArray()
  @IsString({ each: true })
  images: string[]

  @ApiProperty({
    type: String,
    description: 'qualification',
    required: true,
    example: 5,
  })
  @IsNumber()
  qualification: number

  @ApiProperty({
    type: Boolean,
    description: 'active',
  })
  @IsOptional()
  @IsBoolean()
  active: boolean

  @ApiProperty({
    type: String,
    description: 'id_user',
    required: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0908',
  })
  @IsNotEmpty()
  @IsMongoId()
  @Type(() => User)
  id_user: User

  @ApiProperty({
    type: String,
    description: 'id_category',
    required: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0643',
  })
  @IsNotEmpty()
  @IsMongoId()
  @Type(() => Category)
  id_category: Category

  @ApiProperty({
    type: String,
    description: 'id_subcategory',
    required: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0643',
  })
  @IsNotEmpty()
  @IsMongoId()
  @Type(() => Subcategory)
  id_subcategory: Subcategory
}
