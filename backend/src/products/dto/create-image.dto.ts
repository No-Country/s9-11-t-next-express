import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty } from 'class-validator'

export class CreateImageDto {
  type: String;
  description:
    'avatar url obtained by cloudinary after uploading file. Default: avatar obtained by https://ui-avatars.com/api';
  required: false;
  default: 'https://ui-avatars.com/api/?name=[name]+[lastname]'
  //@ApiProperty({
    // type: String,
    // description:
    //   'avatar url obtained by cloudinary after uploading file. Default: avatar obtained by https://ui-avatars.com/api',
    // required: false,
    // default: 'https://ui-avatars.com/api/?name=[name]+[lastname]',
  //})
  //@IsString({ each: true })
}