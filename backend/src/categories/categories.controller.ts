import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { ApiTags } from '@nestjs/swagger'
import {
  ApiCreateCategory,
  ApiDeleteCategoryById,
  ApiGetAllCategories,
  ApiGetCategoryById,
  ApiPatchCategoryById,
} from './decorators/apiDocCategories.decorator'

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiCreateCategory()
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto)
  }

  @ApiGetAllCategories()
  @Get()
  findAll() {
    return this.categoriesService.findAll()
  }

  @ApiGetCategoryById()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id)
  }

  @ApiPatchCategoryById()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(id, updateCategoryDto)
  }

  @ApiDeleteCategoryById()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id)
  }
}
