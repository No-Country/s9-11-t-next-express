import { applyDecorators } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger'
import { Review } from '../entities/review.entity'
import { User } from 'src/users/entities/user.entity'

export function ApiCreateReview() {
  return applyDecorators(
    ApiOperation({ operationId: 'CreateReview' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'Review Creted',
      type: Review,
    }),
    ApiResponse({
      status: 404,
      description: 'User not found',
    }),
    ApiResponse({
      status: 400,
      description: 'Invalid User',
    }),
  )
}

export function ApiGetReview() {
  return applyDecorators(
    ApiOperation({ operationId: 'CreateReview' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description:
        'Get all reviews data with data of users followed by current user. Follower-User data from user_id field',
      schema: {
        oneOf: [
          {
            type: 'object',
            properties: {
              FollowingReviews: {
                type: 'array',
                items: {
                  type: 'object',
                  $ref: getSchemaPath(Review),
                },
              },
            },
          },
          {
            type: 'object',
            properties: {
              FollowingReviews: {
                description: 'ref: Review Schema',
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
                    stars: {
                      type: 'number',
                      example: '5',
                    },
                    comment: {
                      type: 'string',
                      example: 'Buena relación precio-calidad.',
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

export function ApiPatchReview() {
  return applyDecorators(
    ApiOperation({ operationId: 'CreateReview' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 404,
      description: 'Review-product not found',
    }),
    ApiResponse({
      status: 400,
      description: 'Invalid User',
    }),
    ApiResponse({
      status: 200,
      description: 'Review Updated',
      type: Review,
    }),
  )
}
