import { Review } from './entities/review.entity'
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { CreateReviewDto } from './dto/create-review.dto'
import { UpdateReviewDto } from './dto/update-review.dto'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { UsersService } from 'src/users/users.service'
import { FollowersService } from 'src/followers/followers.service'
import { User } from 'src/users/entities/user.entity'

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name)
    private readonly ReviewModel: Model<Review>,
    private readonly UserService: UsersService,
    private readonly FollowerService: FollowersService,
  ) {}

  async create(currentUser: string, createReviewDto: CreateReviewDto) {
    const { user_id } = createReviewDto

    await this.UserService.userFound(user_id)
    if (currentUser !== user_id) throw new BadRequestException('Invalid User')

    try {
      const review = await this.ReviewModel.create(createReviewDto)
      return review
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async findOne(currentUserId: string, id: string) {
    const findReview = await this.ReviewModel.find({ product_id: id })
    const { following } = await this.FollowerService.getFollowingCurrentUser(
      currentUserId,
    )

    try {
      const followingIds = []

      following.forEach((item) => {
        const { _id } = item.following_id as unknown as User
        followingIds.push(String(_id))
      })

      const FollowingReviews = await Promise.all(
        findReview.map(async (document: Review) => {
          if (followingIds.includes(String(document.user_id))) {
            await document.populate('user_id')
          }
          return document
        }),
      )

      return { FollowingReviews }
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async update(
    currentUserId: string,
    id: string,
    updateReviewDto: UpdateReviewDto,
  ) {
    const findReview = await this.ReviewModel.findOne({
      product_id: id,
      user_id: currentUserId,
    })

    if (!findReview) throw new NotFoundException('Review-product not found')
    try {
      if (currentUserId !== String(findReview.user_id))
        throw new BadRequestException('Invalid User')
      return this.ReviewModel.findOneAndUpdate(
        { product_id: id },
        updateReviewDto,
        { new: true },
      )
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  private handleExceptions(error: any): void {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Comment Duplicate: ${JSON.stringify(error.keyValue)}`,
      )
    }
    console.log(error)
    throw new InternalServerErrorException(`${error}`)
  }
}
