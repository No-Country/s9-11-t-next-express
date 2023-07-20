import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { LikesService } from './likes.service'
import { CreateLikeDto } from './dto/create-like.dto'
import { Auth, GetUser } from 'src/users/decorators'
import { User } from 'src/users/entities/user.entity'

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  @Auth()
  create(@GetUser() user: User, @Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(user.id, createLikeDto)
  }

  @Delete(':productId')
  @Auth()
  remove(@GetUser() user: User, @Param('productId') productId: string) {
    return this.likesService.remove(user.id, productId)
  }

  @Get('product/:productId')
  findLikesByProductId(@Param('productId') productId: string) {
    return this.likesService.getLikesByProductId(productId)
  }

  @Get('user/current')
  @Auth()
  findLikesByCurrentUser(@GetUser() user: User) {
    return this.likesService.getLikesByCurrentUser(user.id)
  }

  @Get('user/:userId')
  findLikesByUserId(@Param('userId') userId: string) {
    return this.likesService.getLikesByUserId(userId)
  }
}
