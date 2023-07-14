import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './entities/product.entity'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly ProductModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const createProduct = await this.ProductModel.create(createProductDto)
      return createProduct
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async findAll() {
    return await this.ProductModel.find()
  }

  async findOne(id: string) {
    const product = await this.ProductModel.findById(id).populate(
      'id_user id_category id_subcategory',
    )
    if (!product) throw new NotFoundException('Product does not exist!')

    return product
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.ProductModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    )
    if (!product) throw new NotFoundException('Product does not exist!')
    await product.save()
    return product
  }

  async remove(id: string) {
    const product = await this.ProductModel.findById(id)
    if (!product) throw new NotFoundException('Product does not exist!')
    product.active = false
    await product.save()
    return { msg: `Removed Product - Inactive Product` }
  }
}
