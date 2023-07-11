import { Transform } from 'class-transformer'
import {
  IsBoolean,
  IsEmail,
  IsEnum,
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
  address: string

  @IsString()
  phone: string

  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  username: string

  @IsString()
  avatar: string

  @IsBoolean()
  active: boolean

  @IsEnum(['buyer', 'seller'])
  @Transform(({ value }) => value.toLowerCase())
  rol: string
}
