import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { CreateFollowerDto } from './dto/create-follower.dto'
import { Follower } from './entities/follower.entity'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class FollowersService {
  constructor(
    @InjectModel(Follower.name)
    private readonly FollowerModel: Model<Follower>,
  ) {}
  async create(currentUser: string, createFollowerDto: CreateFollowerDto) {
    const { follower_id, following_id } = createFollowerDto

    if (currentUser !== follower_id)
      throw new BadRequestException('Invalid Follower')
    if (following_id === follower_id)
      throw new BadRequestException('A user cannot follow themselves')

    try {
      const follower = await this.FollowerModel.create(createFollowerDto)
      return follower
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async remove(followerId: string, followingId: string) {
    await this.FollowerModel.findOneAndDelete({
      follower_id: followerId,
      following_id: followingId,
    })

    return `removes follower: ${followerId} to ${followingId}`
  }

  async getFollowingCurrentUser(
    currentUserId: string,
  ): Promise<{ following: Follower[] }> {
    try {
      const following = await this.FollowerModel.find({
        follower_id: currentUserId,
      })
        .populate('following_id')
        .exec()

      return { following }
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async getFollowersByCurrentUser(
    currentUserId: string,
  ): Promise<{ myFollowers: Follower[] }> {
    try {
      const followers = await this.FollowerModel.find({
        following_id: currentUserId,
      })
        .populate('follower_id')
        .exec()

      return { myFollowers: followers }
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  private handleExceptions(error: any): void {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Duplicate followers: ${JSON.stringify(error.keyValue)}`,
      )
    }
    console.log(error)
    throw new InternalServerErrorException(`${error}`)
  }
}
