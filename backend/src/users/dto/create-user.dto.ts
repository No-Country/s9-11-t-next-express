import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'
export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'name',
    required: true,
    example: 'John',
  })
  @IsString()
  name: string

  @ApiProperty({
    type: String,
    description: 'lastname',
    required: true,
    example: 'Doe',
  })
  @IsString()
  lastname: string

  @ApiProperty({
    type: String,
    description: 'email',
    required: true,
    example: 'test@example.com',
  })
  @IsString()
  @IsEmail()
  email: string

  @ApiProperty({
    type: String,
    description: 'password',
    required: true,
    example: '.a@1234.TEST',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(15)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string

  @ApiProperty({
    type: String,
    description: 'address',
    required: false,
    default: null,
    example: '4473 Boone Crockett Lane',
  })
  @IsString()
  @IsOptional()
  address?: string

  @ApiProperty({
    type: String,
    description: 'phone',
    required: false,
    default: null,
    example: '(919)710-6601',
  })
  @IsString()
  @IsOptional()
  phone?: string

  @ApiProperty({
    type: String,
    description: 'username',
    required: false,
    default: '[autogenerate by name, lastname, Math.random()]',
  })
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsOptional()
  username?: string

  @ApiProperty({
    type: String,
    description:
      'avatar url obtained by cloudinary after uploading file. Default: avatar obtained by https://ui-avatars.com/api',
    required: false,
    default: 'https://ui-avatars.com/api/?name=[name]+[lastname]',
  })
  @IsString()
  @IsOptional()
  avatar?: string

  @ApiProperty({
    type: String,
    description: 'status',
    required: false,
    default: 'true',
  })
  @IsBoolean()
  @IsOptional()
  active?: boolean

  @ApiProperty({
    type: String,
    description: 'user rol',
    enum: ['buyer', 'seller'],
    required: false,
    default: 'buyer',
  })
  @IsEnum(['buyer', 'seller'])
  @Transform(({ value }) => value.toLowerCase())
  @IsOptional()
  rol?: string
}
