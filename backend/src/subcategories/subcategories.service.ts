import { Injectable } from '@nestjs/common'
import { CreateSubcategoryDto } from './dto/create-subcategory.dto'
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Subcategory } from './entities/subcategory.entity'
import { Model } from 'mongoose'

@Injectable()
export class SubcategoriesService {
  constructor(
    @InjectModel(Subcategory.name)
    private readonly SubcategoryModel: Model<Subcategory>,
  ) {}

  async create(
    createSubcategoryDto: CreateSubcategoryDto,
  ): Promise<Subcategory> {
    const createSubcategory = new this.SubcategoryModel(createSubcategoryDto)
    return createSubcategory.save()
  }

  async findAll(): Promise<Subcategory[]> {
    return this.SubcategoryModel.find().exec()
  }

  async findOne(id: number) {
    return this.SubcategoryModel.findById(id).exec()
  }

  async update(
    id: number,
    updateSubcategoryDto: UpdateSubcategoryDto,
  ): Promise<Subcategory> {
    return this.SubcategoryModel.findByIdAndUpdate(id, updateSubcategoryDto, {
      new: true,
    })
  }

  async remove(id: number): Promise<Subcategory> {
    return this.SubcategoryModel.findByIdAndDelete(id)
  }
}
