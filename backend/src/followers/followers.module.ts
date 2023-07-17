import { Module } from '@nestjs/common'
import { FollowersService } from './followers.service'
import { FollowersController } from './followers.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Follower, FollowerSchema } from './entities/follower.entity'
import { UsersModule } from 'src/users/users.module'
import { UsersService } from 'src/users/users.service'
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module'

@Module({
  controllers: [FollowersController],
  providers: [FollowersService, UsersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Follower.name,
        schema: FollowerSchema,
      },
    ]),
    UsersModule,
    CloudinaryModule,
  ],
})
export class FollowersModule {}
