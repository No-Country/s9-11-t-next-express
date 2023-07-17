import { ApiProperty } from '@nestjs/swagger'
import { IsMongoId, IsNotEmpty } from 'class-validator'

export class CreateFollowerDto {
  @ApiProperty({
    type: String,
    description: 'ID of the follower | ref: User',
    required: true,
    format: 'ObjectId',
    example: '60e8a37134f59e001fde6c48',
  })
  @IsNotEmpty()
  @IsMongoId()
  follower_id: string

  @ApiProperty({
    type: String,
    description: 'ID of the follower | ref: User',
    required: true,
    format: 'ObjectId',
    example: '60e8a37134f59e001fde6c48',
  })
  @IsNotEmpty()
  @IsMongoId()
  following_id: string
}
