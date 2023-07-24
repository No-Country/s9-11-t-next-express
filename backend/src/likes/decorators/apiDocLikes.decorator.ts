import { applyDecorators } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger'
import { Like } from '../entities/like.entity'
import { User } from 'src/users/entities/user.entity'

export const ApiCreateLike = () => {
  return applyDecorators(
    ApiOperation({ operationId: 'FindFollowerCurrentUser' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'data like. Ref: Like Schema',
      type: Like,
    }),
    ApiResponse({
      status: 400,
      description: 'Duplicate likes: [UserId/ProductId]',
    }),
  )
}

export const ApiGetLikesByProductId = () => {
  return applyDecorators(
    ApiOperation({ operationId: 'FindLikesByProductId' }),
    ApiResponse({
      status: 200,
      description:
        'Get all likes data with data of users followed by current user.',
      schema: {
        oneOf: [
          {
            type: 'object',
            properties: {
              FollowingLikes: {
                type: 'array',
                items: {
                  type: 'object',
                  $ref: getSchemaPath(Like),
                },
              },
            },
          },
          {
            type: 'object',
            properties: {
              FollowingLikes: {
                description: 'ref: Like Schema',
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    user_id: {
                      type: 'object',
                      $ref: getSchemaPath(User),
                    },
                    product_id: {
                      type: 'string',
                      example: '64b08f8eeaa60839474369b7',
                    },
                  },
                },
              },
            },
          },
        ],
      },
    }),
  )
}

export const ApiDeleteLikeByProductoId = () => {
  return applyDecorators(
    ApiOperation({ operationId: 'DeleteLikeByProductId' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description:
        'Removed like from user: [currentUserId] to product: [productId]',
    }),
    ApiResponse({
      status: 404,
      description: 'Product not found',
    }),
    ApiResponse({
      status: 404,
      description: 'User not found',
    }),
  )
}
