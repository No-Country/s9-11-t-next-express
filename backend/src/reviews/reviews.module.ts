import { Module } from '@nestjs/common'
import { ReviewsService } from './reviews.service'
import { ReviewsController } from './reviews.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Review, ReviewSchema } from './entities/review.entity'
import { UsersModule } from 'src/users/users.module'
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module'
import { UsersService } from 'src/users/users.service'
import { FollowersModule } from 'src/followers/followers.module'
import { FollowersService } from 'src/followers/followers.service'

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService, UsersService, FollowersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Review.name,
        schema: ReviewSchema,
      },
    ]),
    UsersModule,
    CloudinaryModule,
    FollowersModule,
  ],
  exports: [MongooseModule],
})
export class ReviewsModule {}
