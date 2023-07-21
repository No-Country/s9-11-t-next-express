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
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'
import { CLOUDINARY_FOLDERS } from 'src/cloudinary/constants'

@Injectable()
export class ProductsService {
    constructor(
    @InjectModel(Product.name)
    private readonly ProductModel: Model<Product>,
    private cloudinary: CloudinaryService
  ) {}

  async create(createProductDto: CreateProductDto, file: Express.Multer.File) {
    try {
      const createProduct = await this.ProductModel.create(createProductDto)
      const public_id = await this.getPreviewAvatar(createProductDto.id_user._id)
      if (file && public_id) {
        const result = await this.cloudinary.uploadFileCloudinary(
          file,
          public_id,
          CLOUDINARY_FOLDERS.PRODUCTS,
        )
        createProductDto.images = result.secure_url
      }
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

  // private async getPreviewAvatar(id: string) {
  //   const preview_images = (
  //     await this.ProductModel.findById(id).select('avatar -_id').exec()
  //   ).images

  //   let public_id = ''
  //   if (preview_images?.includes('cloudinary.com')) {
  //     public_id = preview_images
  //       .split('/')
  //       [preview_images.split('/').length - 1].split('.')[0]
  //   }
  //   return public_id
  // }
  private async getPreviewAvatar(id: string) {
    try {
      const product = await this.ProductModel.findById(id).select('images -_id').exec();
      const images = product?.images;

      let public_id = '';

      if (images && images.length > 0 && images[0].url.includes('cloudinary.com')) {
        const urlParts = images[0].url.split('/');
        public_id = urlParts[urlParts.length - 1].split('.')[0];
      }

      return public_id;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
}
