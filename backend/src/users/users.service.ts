import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { JwtPayloadI } from './common/jwtPayload.interface'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.UserModel.create(createUserDto)
      return {
        ...user.toObject(),
        token: this.getJwtToken({ email: user.email }),
      }
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async login(loginUserDto: { email: string; password: string }) {
    const { password, email } = loginUserDto
    const user = await this.UserModel.findOne({
      email,
    }).select('email password')

    if (!user)
      throw new UnauthorizedException('Credentials are not valid (email)')

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException('Credentials are not valid (password)')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userData } = user.toObject()

    return {
      ...userData,
      token: this.getJwtToken({ email: user.email }),
    }
  }

  findAll() {
    return this.UserModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }

  private getJwtToken(payload: JwtPayloadI) {
    const token = this.jwtService.sign(payload)
    return token
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Restister exists in db ${JSON.stringify(error.keyValue)}`,
      )
    }
    throw new InternalServerErrorException(
      `Can't create Restister - Check server logs`,
    )
  }
}
