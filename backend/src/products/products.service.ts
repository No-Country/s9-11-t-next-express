import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './entities/product.entity'
import { Image } from './entities/image.entity'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'
import { CLOUDINARY_FOLDERS } from 'src/cloudinary/constants'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly ProductModel: Model<Product>,
    @InjectModel(Image.name)
    private readonly ImageModel: Model<Image>,
    private cloudinary: CloudinaryService,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const createProduct = await this.ProductModel.create(createProductDto)
      return createProduct
    } catch (error) {
      throw new InternalServerErrorException(`${error}`)
    }
  }

  async uploadFiles(files: Array<Express.Multer.File>, productId: string) {
    const publicIds = await this.getPublicsIdsImg(productId)

    try {
      const uploadedImages = await this.cloudinary.uploadFilesCloudinary(
        files,
        publicIds,
        CLOUDINARY_FOLDERS.PRODUCTS,
      )
      // Aquí guardas las URLs de las imágenes en la colección Image
      const imageUrls = uploadedImages.map((image) => image.secure_url)
      const imageDocs = imageUrls.map((url) => ({ url }))
      //eliminar anteriores si los hubiere
      const Product = await this.ProductModel.findById(productId)
      const previousImages = Product.images

      // Obtener las imágenes que se deben eliminar
      const imagesToDelete = await this.ImageModel.find({
        _id: { $in: previousImages },
      })
      // Eliminar las imágenes anteriores
      await this.ImageModel.deleteMany({
        _id: { $in: imagesToDelete.map((image) => image.id) },
      })

      const Image = await this.ImageModel.create(imageDocs)

      // Crear producto y referencias de las imágenes
      //const product = await this.ProductModel.findById(productId)
      Product.images = []
      Product.images = Image.map((image) => String(image._id))

      return Product.save()
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    const Products = await this.ProductModel.find().populate({
      path: 'images',
      select: 'url -_id',
    })

    // Extraer solo las URLs de las imágenes y devolver un arreglo de cadenas
    const productsWithUrls = Products.map((product) => ({
      ...product.toObject(),
      images: product.images?.map((image: any) => image.url),
    }))

    return productsWithUrls
  }

  async findOne(id: string) {
    const Product = await this.ProductModel.findById(id)
      .populate('id_user id_category id_subcategory')
      .populate({
        path: 'images',
        select: 'url -_id',
      })
    if (!Product) throw new NotFoundException('Product does not exist!')

    // Extraer solo las URLs de las imágenes y devolver un arreglo de cadenas
    const productWithUrls = {
      ...Product.toObject(),
      images: Product.images?.map((image: any) => image.url),
    }

    return productWithUrls
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

  private async getPublicsIdsImg(productId: string): Promise<string[]> {
    const preview_avatar = await this.ProductModel.findById(productId)
      .select('images -_id')
      .populate({
        path: 'images',
        select: 'url -_id',
      })

    const publicsIds: string[] = []

    console.log('opre', preview_avatar.images)
    preview_avatar.images.map((item) => {
      let public_id = ''
      const { url } = item as unknown as { url: string }
      if (url.includes('cloudinary.com')) {
        public_id = url.split('/')[url.split('/').length - 1].split('.')[0]
      }
      publicsIds.push(public_id)
    })

    return publicsIds
  }
}
