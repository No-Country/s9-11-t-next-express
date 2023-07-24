import { applyDecorators } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger'
import { Category } from '../entities/category.entity'

export function ApiCreateCategory() {
  return applyDecorators(
    ApiOperation({ operationId: 'CreateCategory' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 201,
      description: 'Category created (Category))',
      type: Category,
    }),
    ApiResponse({
      status: 400,
      description: '[Invalid data field type or value]',
    }),
  )
}

export function ApiGetAllCategories() {
  return applyDecorators(
    ApiOperation({ operationId: 'getAllCategories' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'Category list (Category))',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          $ref: getSchemaPath(Category),
        },
      },
    }),
  )
}

export function ApiGetCategoryById() {
  return applyDecorators(
    ApiOperation({ operationId: 'getCategoryById' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'Category id',
    }),
    ApiResponse({
      status: 200,
      description: 'Category item (Category))',
      type: Category,
    }),
  )
}

export function ApiPatchCategoryById() {
  return applyDecorators(
    ApiOperation({ operationId: 'patchCategoryById' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'Category id',
    }),
    ApiResponse({
      status: 200,
      description: 'Category item (Category))',
      type: Category,
    }),
  )
}

export function ApiDeleteCategoryById() {
  return applyDecorators(
    ApiOperation({ operationId: 'deleteCategoryById' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'Category id',
    }),
    ApiResponse({
      status: 200,
      description: 'remove category',
      schema: {
        type: 'string',
        example: '60e8a37134f59e001fde6c49',
      },
    }),
    ApiResponse({
      status: 400,
      description: 'Category does not exist!',
    }),
  )
}
