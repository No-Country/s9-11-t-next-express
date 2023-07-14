import { IsMongoId, IsNotEmpty } from 'class-validator'

export class CreateFollowerDto {
  @IsNotEmpty()
  @IsMongoId()
  follower_id: string

  @IsNotEmpty()
  @IsMongoId()
  following_id: string
}
