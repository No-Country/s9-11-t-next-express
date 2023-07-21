import { Module } from '@nestjs/common'
import { LikesService } from './likes.service'
import { LikesController } from './likes.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Like, LikeSchema } from './entities/like.entity'
import { UsersModule } from 'src/users/users.module'
import { ProductsModule } from 'src/products/products.module'
import { UsersService } from 'src/users/users.service'
import { ProductsService } from 'src/products/products.service'
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module'
import { FollowersService } from 'src/followers/followers.service'
import { FollowersModule } from 'src/followers/followers.module'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Like.name, schema: LikeSchema }]),
    UsersModule,
    ProductsModule,
    CloudinaryModule,
    FollowersModule,
  ],
  controllers: [LikesController],
  providers: [LikesService, UsersService, ProductsService, FollowersService],
  exports: [MongooseModule],
})
export class LikesModule {}
