import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common'
import { FollowersService } from './followers.service'
import { CreateFollowerDto } from './dto/create-follower.dto'
import { User } from 'src/users/entities/user.entity'
import { Auth, GetUser } from '../users/decorators'
import { ApiTags } from '@nestjs/swagger'
import {
  ApiCreateFollower,
  ApiFindFollowerCurrentUser,
  ApiFindFollowingByCurrentUser,
  ApiRemoveFollower,
} from './decorators/apiDocFollower.decorator'

@ApiTags('Followers')
@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @ApiCreateFollower()
  @Post()
  @Auth()
  create(
    @Body(new ValidationPipe({ whitelist: true }))
    createFollowerDto: CreateFollowerDto,
    @GetUser() user: User,
  ) {
    return this.followersService.create(user.id, createFollowerDto)
  }

  @ApiFindFollowingByCurrentUser()
  @Get('/following/current')
  @Auth()
  findFollowingByCurrentUser(@GetUser() user: User) {
    return this.followersService.getFollowingCurrentUser(user.id)
  }

  @ApiFindFollowerCurrentUser()
  @Get('/current')
  @Auth()
  findFollowerCurrentUser(@GetUser() user: User) {
    return this.followersService.getFollowersByCurrentUser(user.id)
  }

  @ApiRemoveFollower()
  @Delete(':followingId')
  @Auth()
  remove(@GetUser() user: User, @Param('followingId') followingId: string) {
    return this.followersService.remove(user.id, followingId)
  }
}
