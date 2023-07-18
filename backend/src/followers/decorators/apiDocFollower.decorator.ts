import { applyDecorators } from '@nestjs/common'
import {
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  getSchemaPath,
  ApiParam,
} from '@nestjs/swagger'
import { User } from 'src/users/entities/user.entity'
import { Follower } from '../entities/follower.entity'

export function ApiCreateFollower() {
  return applyDecorators(
    ApiOperation({ operationId: 'CreateFollower' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'Follower created',
      type: Follower,
    }),
    ApiResponse({ status: 401, description: 'UnAuthorized' }),
    ApiResponse({
      status: 400,
      description:
        'Invalid Follower | A user cannot follow themselves | Duplicate followers',
    }),
    ApiResponse({ status: 404, description: 'Following user not found' }),
  )
}

export function ApiFindFollowerCurrentUser() {
  return applyDecorators(
    ApiOperation({ operationId: 'FindFollowerCurrentUser' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description:
        '"myFollowers": [{follower_id: User, following_id: String (ObjectId)}]',
      schema: {
        type: 'object',
        properties: {
          myFollowers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                followerId: {
                  type: 'object',
                  $ref: getSchemaPath(User),
                },
                followingId: {
                  type: 'string',
                  example: '60e8a37134f59e001fde6c49',
                },
              },
            },
          },
        },
      },
    }),
  )
}

export function ApiFindFollowingByCurrentUser() {
  return applyDecorators(
    ApiOperation({ operationId: 'FindFollowingByCurrentUser' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'Id current User + Following user data. Ref: User',
      schema: {
        type: 'object',
        properties: {
          following: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                followerId: {
                  type: 'string',
                  example: '60e8a37134f59e001fde6c49',
                },
                followingId: {
                  type: 'object',
                  $ref: getSchemaPath(User),
                },
              },
            },
          },
        },
      },
    }),
  )
}

export function ApiRemoveFollower() {
  return applyDecorators(
    ApiOperation({ operationId: 'RemoveFollower' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'followingId',
      type: 'string',
      format: 'ObjectId',
      description: 'User id',
    }),
    ApiResponse({
      status: 200,
      description: 'removes follower: [followerId] to [followingId]',
    }),
  )
}
