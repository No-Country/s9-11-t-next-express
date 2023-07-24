import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common'
import { SubcategoriesService } from './subcategories.service'
import { CreateSubcategoryDto } from './dto/create-subcategory.dto'
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto'
import { ApiTags } from '@nestjs/swagger'
import {
  ApiCreateSubCategory,
  ApiDeleteSubCategoryById,
  ApiGetAllSubCategories,
  ApiGetSubCategoryById,
  ApiPatchSubCategoryById,
} from './decorators/apiDocSubCategories.decorator'

@ApiTags('SubCategories')
@Controller('subcategories')
export class SubcategoriesController {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @ApiCreateSubCategory()
  @Post()
  create(@Body() createSubcategoryDto: CreateSubcategoryDto) {
    return this.subcategoriesService.create(createSubcategoryDto)
  }

  @ApiGetAllSubCategories()
  @Get()
  findAll() {
    return this.subcategoriesService.findAll()
  }

  @ApiGetSubCategoryById()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subcategoriesService.findOne(id)
  }

  @ApiPatchSubCategoryById()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubcategoryDto: UpdateSubcategoryDto,
  ) {
    return this.subcategoriesService.update(id, updateSubcategoryDto)
  }

  @ApiDeleteSubCategoryById()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategoriesService.remove(id)
  }
}
