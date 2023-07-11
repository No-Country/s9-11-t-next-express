import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { Auth, GetUser } from './decorators'
import { User } from './entities/user.entity'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Post('login')
  loginUser(@Body() loginUserDto: { email: string; password: string }) {
    return this.usersService.login(loginUserDto)
  }

  @Get('current')
  @Auth()
  findUser(@GetUser() user: User) {
    return user
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto, file)
  }

  @Delete(':id')
  @Auth()
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
