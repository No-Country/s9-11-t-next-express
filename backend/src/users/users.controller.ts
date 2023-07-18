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
import { ApiTags } from '@nestjs/swagger'
import {
  ApiCreateUser,
  ApiFindUser,
  ApiLoginUser,
  ApiRemoveUser,
  ApiUpdateUser,
} from './decorators/apiDocUsers.decorator'

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreateUser()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @ApiLoginUser()
  @Post('login')
  loginUser(@Body() loginUserDto: { email: string; password: string }) {
    return this.usersService.login(loginUserDto)
  }

  @ApiFindUser()
  @Get('current')
  @Auth()
  findUser(@GetUser() user: User) {
    return user
  }

  @ApiUpdateUser()
  @Patch(':id')
  @UseInterceptors(FileInterceptor('file'))
  update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto, file)
  }

  @ApiRemoveUser()
  @Delete(':id')
  @Auth()
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
