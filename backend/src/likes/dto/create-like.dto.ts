import { Type } from 'class-transformer'
import { IsMongoId, IsNotEmpty } from 'class-validator'
import { Product } from 'src/products/entities/product.entity'
import { User } from 'src/users/entities/user.entity'

export class CreateLikeDto {
  @IsNotEmpty()
  @IsMongoId()
  @Type(() => Product)
  product_id: string

  @IsNotEmpty()
  @IsMongoId()
  @Type(() => User)
  user_id: string
}
