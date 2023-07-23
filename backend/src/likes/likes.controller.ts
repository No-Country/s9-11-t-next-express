import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { LikesService } from './likes.service'
import { CreateLikeDto } from './dto/create-like.dto'
import { Auth, GetUser } from 'src/users/decorators'
import { User } from 'src/users/entities/user.entity'
import { ApiTags } from '@nestjs/swagger'
import {
  ApiCreateLike,
  ApiDeleteLikeByProductoId,
  ApiGetLikesByProductId,
} from './decorators/apiDocLikes.decorator'

@ApiTags('Likes')
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @ApiCreateLike()
  @Post()
  @Auth()
  create(@GetUser() user: User, @Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(user.id, createLikeDto)
  }

  @ApiDeleteLikeByProductoId()
  @Delete(':productId')
  @Auth()
  remove(@GetUser() user: User, @Param('productId') productId: string) {
    return this.likesService.remove(user.id, productId)
  }

  @ApiGetLikesByProductId()
  @Get('product/:productId')
  @Auth()
  findLikesByProductId(
    @GetUser() user: User,
    @Param('productId') productId: string,
  ) {
    return this.likesService.getLikesByProductId(user.id, productId)
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
