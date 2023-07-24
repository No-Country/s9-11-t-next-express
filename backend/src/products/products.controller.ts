import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { ApiTags } from '@nestjs/swagger'
import {
  ApiCreateProduct,
  ApiFindAllProducts,
  ApiFindProduct,
  ApiPatchProduct,
  ApiPatchUploadFiles,
  ApiRemoveProduct,
} from './decorators/apiDocProducts.decorator'
import { FilesInterceptor } from '@nestjs/platform-express'

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @ApiCreateProduct()
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto)
  }

  @ApiPatchUploadFiles()
  @Patch('files/:productId')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Param('productId') productId: string,
  ) {
    return this.productService.uploadFiles(files, productId)
  }

  @ApiFindAllProducts()
  @Get()
  findAll() {
    return this.productService.findAll()
  }

  @ApiFindProduct()
  @Get(':productId')
  findOne(@Param('productId') productId: string) {
    return this.productService.findOne(productId)
  }

  @ApiPatchProduct()
  @Patch(':productId')
  update(
    @Param('productId') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(productId, updateProductDto)
  }

  @ApiRemoveProduct()
  @Delete(':productId')
  remove(@Param('productId') productId: string) {
    return this.productService.remove(productId)
  }
}
