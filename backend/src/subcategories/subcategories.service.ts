import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
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

  async create(createSubcategoryDto: CreateSubcategoryDto) {
    try {
      const subcategory = await this.SubcategoryModel.create(
        createSubcategoryDto,
      )
      return subcategory
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Subcategory already exists')
      }
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async findAll() {
    return await this.SubcategoryModel.find()
  }

  async findOne(id: string) {
    const subcategory = await this.SubcategoryModel.findById(id)
    if (!subcategory) throw new NotFoundException('Subcategory does not exist!')
    return subcategory
  }

  async update(id: string, updateSubcategoryDto: UpdateSubcategoryDto) {
    const subcategory = await this.SubcategoryModel.findByIdAndUpdate(
      id,
      updateSubcategoryDto,
      { new: true },
    )
    if (!subcategory) throw new NotFoundException('Subcategory does not exist!')
    return subcategory
  }

  async remove(id: string) {
    const subcategory = await this.SubcategoryModel.findByIdAndDelete(id)
    if (!subcategory) throw new NotFoundException('Subcategory does not exist!')
    return id
  }
}
