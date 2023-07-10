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
  })
  name: string

  @Prop({
    default: null,
  })
  lastname: string

  @Prop({
    unique: true,
    index: true,
  })
  email: string

  @Prop({ select: false })
  password: string

  @Prop({
    default: null,
  })
  address: string

  @Prop({
    default: null,
  })
  phone: string

  @Prop({ enum: ['buyer', 'seller'], default: 'buyer' })
  rol: string
}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.pre<UserDocument>('save', async function (next) {
  if (this.isModified('password')) {
    const hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword
  }
  next()
})
