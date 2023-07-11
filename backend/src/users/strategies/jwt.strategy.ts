import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { User } from '../entities/user.entity'
import { JwtPayloadI } from '../common/jwtPayload.interface'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private readonly UserModel: Model<User>) {
    super({
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    })
  }

  async validate(payload: JwtPayloadI): Promise<User> {
    const { email } = payload

    const user = await this.UserModel.findOne({ email })

    if (!user) throw new UnauthorizedException('Invalid Token.')

    return user
  }
}
