import { ApiProperty } from '@nestjs/swagger'
import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator'

export class CreateReviewDto {
  @ApiProperty({
    type: String,
    description: 'User ID | ref: User',
    required: true,
    uniqueItems: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0908',
  })
  @IsNotEmpty()
  @IsMongoId()
  user_id: string

  @ApiProperty({
    type: String,
    description: 'Product ID | ref:Product',
    required: true,
    uniqueItems: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce6531e0357',
  })
  @IsNotEmpty()
  @IsMongoId()
  product_id: string

  @ApiProperty({
    type: Number,
    description: 'stars number',
    required: true,
    minimum: 1,
    maximum: 5,
    example: 5,
  })
  @IsNumber()
  @Min(1)
  @Max(5)
  stars: number

  @ApiProperty({
    type: String,
    description: 'comment',
    required: true,
    example: 'Excelente relación precio-calidad',
  })
  @IsOptional()
  @IsString()
  comment: string
}
