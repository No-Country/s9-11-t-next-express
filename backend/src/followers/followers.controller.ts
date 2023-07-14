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

@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Post()
  @Auth()
  create(
    @Body(new ValidationPipe({ whitelist: true }))
    createFollowerDto: CreateFollowerDto,
    @GetUser() user: User,
  ) {
    return this.followersService.create(user.id, createFollowerDto)
  }

  @Get('/following/current')
  @Auth()
  findFollowerByCurrentUser(@GetUser() user: User) {
    return this.followersService.getFollowingCurrentUser(user.id)
  }

  @Get('/current')
  @Auth()
  findFollowingCurrentUser(@GetUser() user: User) {
    return this.followersService.getFollowersByCurrentUser(user.id)
  }

  @Delete(':followingId')
  @Auth()
  remove(@GetUser() user: User, @Param('followingId') followingId: string) {
    return this.followersService.remove(user.id, followingId)
  }
}
