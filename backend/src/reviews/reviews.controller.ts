import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { CreateReviewDto } from './dto/create-review.dto'
import { UpdateReviewDto } from './dto/update-review.dto'
import { User } from 'src/users/entities/user.entity'
import { Auth, GetUser } from 'src/users/decorators'
import {
  ApiGetReview,
  ApiPatchReview,
} from './decorators/apiDocReviews.decorator'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @Auth()
  create(@GetUser() user: User, @Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(user.id, createReviewDto)
  }

  @ApiGetReview()
  @Get(':productId')
  @Auth()
  findOne(@GetUser() user: User, @Param('productId') productId: string) {
    return this.reviewsService.findOne(user.id, productId)
  }

  @ApiPatchReview()
  @Patch(':productId')
  @Auth()
  update(
    @GetUser() user: User,
    @Param('productId') productId: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewsService.update(user.id, productId, updateReviewDto)
  }
}
