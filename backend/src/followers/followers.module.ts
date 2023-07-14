import { Module } from '@nestjs/common'
import { FollowersService } from './followers.service'
import { FollowersController } from './followers.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Follower, FollowerSchema } from './entities/follower.entity'
import { UsersModule } from 'src/users/users.module'

@Module({
  controllers: [FollowersController],
  providers: [FollowersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Follower.name,
        schema: FollowerSchema,
      },
    ]),
    UsersModule,
  ],
})
export class FollowersModule {}
