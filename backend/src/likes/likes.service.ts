import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { CreateLikeDto } from './dto/create-like.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Like } from './entities/like.entity'
import { Model } from 'mongoose'
import { UsersService } from 'src/users/users.service'
import { ProductsService } from 'src/products/products.service'

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Like.name)
    private readonly LikeModel: Model<Like>,
    private readonly UserService: UsersService,
    private readonly ProductService: ProductsService,
  ) {}

  async create(currentUser: string, createLikeDto: CreateLikeDto) {
    createLikeDto.user_id = currentUser
    const { user_id, product_id } = createLikeDto

    await this.userFound(user_id)
    if (currentUser !== user_id) throw new BadRequestException('Invalid User')

    await this.productFound(product_id)

    try {
      const like = await this.LikeModel.create(createLikeDto)
      return like
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async getLikesByCurrentUser(currentUser: string): Promise<{ likes: Like[] }> {
    await this.userFound(currentUser)

    try {
      const likes = await this.LikeModel.find({
        user_id: currentUser,
      })
        .populate('product_id', '_id name price images')
        .exec()
      return { likes }
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async getLikesByUserId(userId: string): Promise<{ likes: Like[] }> {
    await this.userFound(userId)

    try {
      const likes = await this.LikeModel.find({
        user_id: userId,
      })
        .populate('product_id', '_id name price images')
        .exec()
      return { likes }
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async getLikesByProductId(productId: string): Promise<{ likes: Like[] }> {
    await this.productFound(productId)

    try {
      const likes = await this.LikeModel.find({
        product_id: productId,
      })
        .populate('user_id', '_id name avatar')
        .exec()
      return { likes }
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async remove(currentUser: string, productId: string) {
    await this.productFound(productId)
    await this.userFound(currentUser)

    try {
      await this.LikeModel.findOneAndDelete({
        product_id: productId,
        user_id: currentUser,
      })

      return `Removed like from user: ${currentUser} to product: ${productId}`
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  private async userFound(id: string) {
    const user = await this.UserService.userFound(id)
    if (!user) throw new NotFoundException('User not found')
    return user
  }

  private async productFound(id: string) {
    const product = await this.ProductService.findOne(id)
    if (!product) throw new NotFoundException('Product not found')
    return product
  }
}
