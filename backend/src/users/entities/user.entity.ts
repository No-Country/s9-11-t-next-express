import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as bcrypt from 'bcrypt'

export type UserDocument = User & Document
export interface UserI extends Document {
  email: string
  password: string
}

@Schema()
export class User extends Document implements UserI {
  @Prop({
    index: true,
    required: true,
    lowercase: true,
  })
  name: string

  @Prop({
    index: true,
    required: true,
    lowercase: true,
  })
  lastname: string

  @Prop({
    unique: true,
    index: true,
    required: true,
    lowercase: true,
  })
  email: string

  @Prop({
    select: false,
    required: true,
  })
  password: string

  @Prop({
    default: null,
  })
  address: string

  @Prop({
    default: null,
  })
  phone: string

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

  @Prop({
    default: function () {
      return `https://ui-avatars.com/api/?name=${this.name}+${this.lastname}`
    },
  })
  avatar: string

  @Prop({
    default: false,
  })
  active: boolean

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
