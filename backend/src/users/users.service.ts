import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
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
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'
import { CLOUDINARY_FOLDERS } from 'src/cloudinary/constants'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly UserModel: Model<User>,
    private readonly jwtService: JwtService,
    private cloudinary: CloudinaryService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.UserModel.create(createUserDto)
      const userData = user.toObject({ virtuals: true })
      delete userData.id
      delete userData._id
      delete userData.__v
      delete userData.password
      return {
        ...userData,
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

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
    file?: Express.Multer.File,
  ) {
    try {
      const public_id = await this.getPreviewAvatar(id)
      if (file && public_id) {
        const result = await this.cloudinary.uploadFileCloudinary(
          file,
          public_id,
          CLOUDINARY_FOLDERS.USERS,
        )
        // Actualiza avatar url y los campos adicionales en el objeto
        updateUserDto.avatar = result.secure_url
      }
      const updatedUser = await this.UserModel.findByIdAndUpdate(
        id,
        updateUserDto,
        { new: true },
      )

      return updatedUser
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async remove(id: string) {
    const userFound = await this.userFound(id)
    if (userFound) {
      userFound.active = false
      await userFound.save()
    }
    return { msg: `Deleted User - Inactive User` }
  }

  private async getPreviewAvatar(id: string) {
    const preview_avatar = (
      await this.UserModel.findById(id).select('avatar -_id').exec()
    ).avatar

    let public_id = ''
    if (preview_avatar?.includes('cloudinary.com')) {
      public_id = preview_avatar
        .split('/')
        [preview_avatar.split('/').length - 1].split('.')[0]
    }
    return public_id
  }

  private getJwtToken(payload: JwtPayloadI) {
    const token = this.jwtService.sign(payload)
    return token
  }

  async userFound(id: string) {
    const user = await this.UserModel.findById(id)
    if (!user) throw new NotFoundException('User not found')
    return user
  }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `User exists in db ${JSON.stringify(error.keyValue)}`,
      )
    }
    console.log(error)
    throw new InternalServerErrorException(`${error}`)
  }
}
