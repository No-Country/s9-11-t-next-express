import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ConflictException,
  NotFoundException,
  HttpCode,
  Put,
} from '@nestjs/common'
import { SubcategoriesService } from './subcategories.service'
import { CreateSubcategoryDto } from './dto/create-subcategory.dto'
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto'

@Controller('subcategories')
export class SubcategoriesController {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Post()
  async create(@Body() body: CreateSubcategoryDto) {
    try {
      return await this.subcategoriesService.create(body)
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Subcategory already exists')
      }
      console.log(error)
      return error.message
    }
  }

  @Get()
  async findAll() {
    return await this.subcategoriesService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const subcategory = await this.subcategoriesService.findOne(+id)
    if (!subcategory) throw new NotFoundException('Subcategory does not exist!')
    return subcategory
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateSubcategoryDto) {
    const subcategory = await this.subcategoriesService.update(+id, body)
    if (!subcategory) throw new NotFoundException('Subcategory does not exist!')
    return subcategory
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const subcategory = await this.subcategoriesService.remove(+id)
    if (!subcategory) throw new NotFoundException('Subcategory does not exist!')
    return subcategory
  }
}
