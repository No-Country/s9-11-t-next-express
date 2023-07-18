import { applyDecorators } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger'
import { User } from '../entities/user.entity'
import { UpdateUserDto } from '../dto/update-user.dto'

export function ApiCreateUser() {
  return applyDecorators(
    ApiOperation({ operationId: 'CreateUser' }),
    ApiResponse({
      status: 200,
      description: 'User created (User+token)',
      type: User,
    }),
    ApiResponse({
      status: 400,
      description: '[Invalid data field type or value] |User exists in db',
    }),
  )
}

export function ApiLoginUser() {
  return applyDecorators(
    ApiOperation({ operationId: 'LoginUser' }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            example: 'test@example.com',
          },
          password: {
            type: 'string',
            example: 'Password.Abc123@',
          },
        },
      },
    }),
    ApiResponse({
      status: 200,
      description: 'login successful (User+token)',
    }),
    ApiResponse({
      status: 401,
      description:
        'Credentials are not valid (email) | Credentials are not valid (password)',
    }),
    ApiResponse({
      status: 400,
      description: '[Invalid data field type or value]',
    }),
  )
}

export function ApiFindUser() {
  return applyDecorators(
    ApiOperation({ operationId: 'GetCurrentUser' }),
    ApiBearerAuth(),
    ApiResponse({
      status: 200,
      description: 'current user data',
      type: User,
    }),
  )
}

export function ApiUpdateUser() {
  return applyDecorators(
    ApiOperation({ operationId: 'UpdateUser' }),
    ApiBearerAuth(),
    ApiConsumes('application/json', 'multipart/form-data'),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'User id',
    }),
    ApiBody({
      schema: {
        oneOf: [
          {
            type: 'object',
            properties: {
              data: {
                type: 'object',
                $ref: getSchemaPath(UpdateUserDto),
              },
            },
            required: ['data'],
          },
          {
            type: 'object',
            properties: {
              file: {
                type: 'string',
                format: 'binary',
                description: 'Archivo',
              },
            },
            required: ['file'],
          },
        ],
      },
      examples: {
        jsonExample: {
          $ref: getSchemaPath(UpdateUserDto),
          description: 'Update data user. Ref: UpdateUserDto',
        },
        fileExample: {
          value: '[file]: myCustomAvatar.png',
          description:
            'image file (form-data key:file). Url obtained after upload in Cloudinary.',
        },
      },
    }),
    ApiResponse({
      status: 200,
      description: 'current user data',
      type: UpdateUserDto,
    }),
    ApiResponse({
      status: 400,
      description:
        '[Invalid data field type or value] | [relative error in Cloudinary]',
    }),
  )
}

export function ApiRemoveUser() {
  return applyDecorators(
    ApiOperation({ operationId: 'DeleteUser' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'id',
      type: 'string',
      format: 'ObjectId',
      description: 'User id',
    }),
    ApiResponse({
      status: 200,
      description: 'Disable user - resp: Deleted User - Inactive User',
    }),
    ApiResponse({
      status: 404,
      description: 'Following user not found',
    }),
  )
}
