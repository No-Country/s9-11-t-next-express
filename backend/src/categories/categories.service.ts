import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Category } from './entities/category.entity'
import { Model } from 'mongoose'

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly CategoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.CategoryModel.create(createCategoryDto)
      return category
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Category already exists')
      }
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async findAll() {
    return await this.CategoryModel.
  }

  async findOne(id: string) {
    const category = await this.CategoryModel.findById(id)
    if (!category) throw new NotFoundException('Category does not exist!')
    return category
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.CategoryModel.findByIdAndUpdate(
      id,
      updateCategoryDto,
      { new: true },
    )
    if (!category) throw new NotFoundException('Category does not exist!')
    return category
  }

  async remove(id: string) {
    const category = await this.CategoryModel.findByIdAndDelete(id)
    if (!category) throw new NotFoundException('Category does not exist!')
    return id
  }
}
