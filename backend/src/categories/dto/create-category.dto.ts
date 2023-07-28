import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateCategoryDto {
  @ApiProperty({
    type: String,
    description: 'name',
    required: true,
    example: 'Electronic',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  name: string
}
