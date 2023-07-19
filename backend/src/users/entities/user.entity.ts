import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as bcrypt from 'bcrypt'
import { ApiProperty, ApiTags } from '@nestjs/swagger'

export type UserDocument = User & Document

@ApiTags('Users')
@Schema()
export class User extends Document {
  @ApiProperty({
    type: String,
    description: 'name',
    required: true,
  })
  @Prop({
    index: true,
    required: true,
    lowercase: true,
  })
  name: string

  @ApiProperty({
    type: String,
    description: 'lastname',
    required: true,
  })
  @Prop({
    index: true,
    required: true,
    lowercase: true,
  })
  lastname: string

  @ApiProperty({
    type: String,
    description: 'email',
    required: true,
  })
  @Prop({
    unique: true,
    index: true,
    required: true,
    lowercase: true,
  })
  email: string

  @ApiProperty({
    type: String,
    description: 'password',
    required: true,
  })
  @Prop({
    select: false,
    required: true,
  })
  password: string

  @ApiProperty({
    type: String,
    description: 'address',
    required: false,
    default: null,
  })
  @Prop({
    default: null,
  })
  address: string

  @ApiProperty({
    type: String,
    description: 'phone',
    required: false,
    default: null,
  })
  @Prop({
    default: null,
  })
  phone: string

  @ApiProperty({
    type: String,
    description: 'username',
    required: false,
    default: '[autogenerate by name, lastname, Math.random()]',
  })
  @Prop({
    default: function () {
      if (this.name && this.lastname)
        return `${this.name.slice(0, 4)}${this.lastname.substring(
          this.lastname.length - 3,
        )}${Math.floor(Math.random() * 1000)}`
      return null
    },
  })
  username: string

  @ApiProperty({
    type: String,
    description:
      'avatar url obtained by cloudinary after uploading file. Default: avatar obtained by https://ui-avatars.com/api',
    required: false,
    default: 'https://ui-avatars.com/api/?name=[name]+[lastname]',
  })
  @Prop({
    default: function () {
      return `https://ui-avatars.com/api/?name=${this.name}+${this.lastname}`
    },
  })
  avatar: string

  @ApiProperty({
    type: String,
    description: 'status',
    required: false,
    default: 'true',
  })
  @Prop({
    default: true,
  })
  active: boolean

  @ApiProperty({
    type: String,
    description: 'user rol',
    enum: ['buyer', 'seller'],
    required: false,
    default: 'buyer',
  })
  @Prop({ enum: ['buyer', 'seller'], default: 'buyer' })
  rol: string

  @Prop({ select: false })
  __v: number // Omitir el campo __v
}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.pre<UserDocument>('save', async function (next) {
  if (this.isModified('password')) {
    const hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword
  }
  next()
})
