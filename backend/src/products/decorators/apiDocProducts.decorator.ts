import { applyDecorators } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger'
import { Product } from '../entities/product.entity'

export function ApiCreateProduct() {
  return applyDecorators(
    ApiOperation({ operationId: 'CreateProduct' }),
    ApiConsumes('application/json'),
    ApiBearerAuth(),
    ApiParam({
      name: 'id_user',
      type: 'string',
      format: 'ObjectId',
      description: 'User id',
    }),
    ApiResponse({
      status: 201,
      description: 'Product created (Product)',
      type: Product,
    }),
    ApiResponse({
      status: 400,
      description: '[Invalid data field type or value]',
    }),
  )
}

export function ApiFindProduct() {
  return applyDecorators(
    ApiOperation({ operationId: 'FindProductById' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'current product data',
      type: Product,
    }),
  )
}

export function ApiFindAllProducts() {
  return applyDecorators(
    ApiOperation({ operationId: 'GetCurrentProducts' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'current products data',
      type: Product,
    }),
  )
}

export function ApiPatchUploadFiles() {
  return applyDecorators(
    ApiOperation({ operationId: 'UploadFiles' }),
    ApiBearerAuth(),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          files: {
            type: 'array',
            items: {
              type: 'string',
              format: 'binary',
              example: '[img1.png, img2.png, img3.png]',
            },
          },
        },
      },
    }),
    ApiParam({
      name: 'productId',
      type: 'string',
      format: 'ObjectId',
      description: 'Product id',
    }),
    ApiResponse({
      status: 200,
      description: 'products data updated',
      type: Product,
    }),
  )
}

export function ApiPatchProduct() {
  return applyDecorators(
    ApiOperation({ operationId: 'UpdateProduct' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'products data updated',
      type: Product,
    }),
  )
}

export function ApiRemoveProduct() {
  return applyDecorators(
    ApiOperation({ operationId: 'DeleteProduct' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'Product id',
    }),
    ApiResponse({
      status: 200,
      description: 'Disable product - resp: Deleted Product - Inactive Product',
    }),
    ApiResponse({
      status: 404,
      description: 'Product not found',
    }),
  )
}
