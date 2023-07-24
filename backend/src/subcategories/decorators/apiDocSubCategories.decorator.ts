import { applyDecorators } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger'
import { Subcategory } from '../entities/subcategory.entity'

export function ApiCreateSubCategory() {
  return applyDecorators(
    ApiOperation({ operationId: 'CreateSubCategory' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 201,
      description: 'SubCategory created (SubCategory))',
      type: Subcategory,
    }),
    ApiResponse({
      status: 400,
      description: '[Invalid data field type or value]',
    }),
  )
}

export function ApiGetAllSubCategories() {
  return applyDecorators(
    ApiOperation({ operationId: 'getAllSubCategories' }),
    ApiResponse({
      status: 200,
      description: 'SubCategory list (SubCategory))',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          $ref: getSchemaPath(Subcategory),
        },
      },
    }),
  )
}

export function ApiGetSubCategoryById() {
  return applyDecorators(
    ApiOperation({ operationId: 'getSubCategoryById' }),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'Category id',
    }),
    ApiResponse({
      status: 200,
      description: 'SubCategory item (SubCategory))',
      type: Subcategory,
    }),
  )
}

export function ApiPatchSubCategoryById() {
  return applyDecorators(
    ApiOperation({ operationId: 'patchSubCategoryById' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'Subcategory id',
    }),
    ApiResponse({
      status: 200,
      description: 'SubCategory item (SubCategory))',
      type: Subcategory,
    }),
  )
}

export function ApiDeleteSubCategoryById() {
  return applyDecorators(
    ApiOperation({ operationId: 'deleteSubCategoryById' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'Subcategory id',
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
      description: 'SubCategory does not exist!',
    }),
  )
}
