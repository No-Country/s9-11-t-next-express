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
  @IsString()
  name: string

  @IsString()
  lastname: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @MinLength(6)
  @MaxLength(15)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string

  @IsString()
  @IsOptional()
  address?: string

  @IsString()
  @IsOptional()
  phone?: string

  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsOptional()
  username?: string

  @IsString()
  @IsOptional()
  avatar?: string

  @IsBoolean()
  @IsOptional()
  active?: boolean

  @IsEnum(['buyer', 'seller'])
  @Transform(({ value }) => value.toLowerCase())
  @IsOptional()
  rol?: string
}
