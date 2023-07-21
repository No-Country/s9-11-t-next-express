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
import { FollowersService } from 'src/followers/followers.service'
import { User } from 'src/users/entities/user.entity'

@Injectable()
export class LikesService {
  constructor(
    @InjectModel(Like.name)
    private readonly LikeModel: Model<Like>,
    private readonly UserService: UsersService,
    private readonly ProductService: ProductsService,
    private readonly FollowerService: FollowersService,
  ) {}

  async create(currentUserId: string, createLikeDto: CreateLikeDto) {
    createLikeDto.user_id = currentUserId
    const { user_id, product_id } = createLikeDto

    await this.userFound(user_id)
    if (currentUserId !== user_id) throw new BadRequestException('Invalid User')

    await this.productFound(product_id)

    try {
      const like = await this.LikeModel.create(createLikeDto)
      return like
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async getLikesByCurrentUser(
    currentUserId: string,
  ): Promise<{ likes: Like[] }> {
    await this.userFound(currentUserId)

    try {
      const likes = await this.LikeModel.find({
        user_id: currentUserId,
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

  async getLikesByProductId(
    currentUserId: string,
    productId: string,
  ): Promise<{ FollowingLikes: Like[] }> {
    await this.userFound(currentUserId)
    await this.productFound(productId)

    try {
      const { following } = await this.FollowerService.getFollowingCurrentUser(
        currentUserId,
      )

      const followingIds = []

      following.forEach((item) => {
        const { id } = item.following_id as unknown as User
        followingIds.push(id)
      })

      const FollowingLikes = await this.LikeModel.find({
        product_id: productId,
        user_id: { $in: followingIds },
      }).populate('user_id')

      return { FollowingLikes }
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async remove(currentUserId: string, productId: string) {
    await this.productFound(productId)
    await this.userFound(currentUserId)

    try {
      await this.LikeModel.findOneAndDelete({
        product_id: productId,
        user_id: currentUserId,
      })

      return `Removed like from user: ${currentUserId} to product: ${productId}`
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
