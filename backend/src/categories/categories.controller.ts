import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() body: CreateCategoryDto) {
    try {
      return await this.categoriesService.create(body)
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Category already exists')
      }
      console.log(error)
      return error.message
    }
  }

  @Get()
  async findAll() {
    return await this.categoriesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const category = await this.categoriesService.findOne(+id)
    if (!category) throw new NotFoundException('Category does not exist!')
    return category
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
    const category = await this.categoriesService.update(+id, body)
    if (!category) throw new NotFoundException('Category does not exist!')
    return category
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const category = await this.categoriesService.remove(+id)
    if (!category) throw new NotFoundException('Category does not exist!')
    return category
  }
}
