import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ApiCreateProduct, ApiFindProduct, ApiRemoveProduct } from './decorators/apiDocProducts.decorator'
import { FileInterceptor } from '@nestjs/platform-express'


@ApiTags('Products')
@ApiConsumes('application/json', 'multipart/form-data')
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @ApiCreateProduct()
  @Post()
  @UseInterceptors(FileInterceptor('images')) // Aquí 'file' es el nombre del campo de la imagen en la solicitud
  async create(@Body() createProductDto: CreateProductDto, @UploadedFile() file: Express.Multer.File) {
    return this.productService.create(createProductDto, file);
  }
  // async create(@Body() createProductDto: CreateProductDto) {
  //   if (createProductDto.images) {

  //     // Si hay una imagen en el DTO, procedemos a subirla a Cloudinary
  //     const uploadedImage = await this.uploadToCloudinary(createProductDto.images);

  //     // Ahora, asignamos la URL de la imagen subida al DTO antes de crear el producto
  //     createProductDto.images = uploadedImage.url;
  //   }
  //   return this.productsService.create(createProductDto)
  // }

  @Get()
  findAll() {
    return this.productService.findAll()
  }

  @ApiFindProduct()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto)
  }

  @ApiRemoveProduct()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id)
  }
}