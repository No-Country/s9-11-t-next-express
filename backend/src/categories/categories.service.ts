import { Injectable } from '@nestjs/common'
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

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createSubcategory = new this.CategoryModel(createCategoryDto)
    return createSubcategory.save()
  }

  async findAll(): Promise<Category[]> {
    return this.CategoryModel.find().exec()
  }

  async findOne(id: number) {
    return this.CategoryModel.findById(id).exec()
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.CategoryModel.findByIdAndUpdate(id, updateCategoryDto, {
      new: true,
    })
  }

  async remove(id: number): Promise<Category> {
    return this.CategoryModel.findByIdAndDelete(id)
  }
}
