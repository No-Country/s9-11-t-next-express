import { applyDecorators } from '@nestjs/common'
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiResponse, getSchemaPath } from '@nestjs/swagger'
import { Product } from '../entities/product.entity'
// import { UpdateProductDto } from '../dto/update-product.dto'
import { CreateProductDto } from '../dto/create-product.dto'

export function ApiCreateProduct() {
    return applyDecorators(
        ApiOperation({ operationId: 'CreateProduct' }),
        ApiConsumes('application/json', 'multipart/form-data'),
        ApiParam({
            name: 'id_user',
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
                                $ref: getSchemaPath(CreateProductDto),
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
                    $ref: getSchemaPath(CreateProductDto),
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
            status: 201,
            description: 'Product created (Product+token)',
            type: Product,
        }),
        ApiResponse({
            status: 400,
            description: '[Invalid data field type or value] |Product exists in db',
        }),
    )
}

export function ApiFindProduct() {
    return applyDecorators(
        ApiOperation({ operationId: 'GetCurrentProduct' }),
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
            description: 'Following product not found',
        }),
    )
}