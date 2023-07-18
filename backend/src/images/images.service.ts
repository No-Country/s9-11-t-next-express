import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image, ImageDocument } from './entities/image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}

  async createImage(url: string): Promise<ImageDocument> {
    const createdImage = new this.imageModel({ url });
    return createdImage.save();
  }
}

/* @UseInterceptors(FileFieldsInterceptor([
    { name: 'images', maxCount: 10 },
  ]))
  async createProduct(
    @UploadedFiles() files: { images?: Express.Multer.File[] },
    // Resto de los parámetros del producto...
  ): Promise<Product> {
    const images = files.images || [];
    const createdProduct = await this.productService.createProduct(productData, images);
    return createdProduct;
  } */