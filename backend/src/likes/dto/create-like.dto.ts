import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator'
import { Product } from 'src/products/entities/product.entity'
import { User } from 'src/users/entities/user.entity'

export class CreateLikeDto {
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
  @Type(() => Product)
  product_id: string

  @ApiProperty({
    type: String,
    description: 'User ID (Auth) | ref: User',
    required: false,
    uniqueItems: true,
    format: 'ObjectId',
    example: '64af71c34bb78ce4561e0908',
  })
  @IsNotEmpty()
  @IsMongoId()
  @IsOptional()
  @Type(() => User)
  user_id: string
}
