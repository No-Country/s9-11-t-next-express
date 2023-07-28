import { OpenAPIObject } from '@nestjs/swagger'

export interface ExpressSwaggerCustomOptionsI {
  explorer?: boolean
  swaggerOptions?: Record<string, any>
  customCss?: string
  customCssUrl?: string
  customJs?: string
  customfavIcon?: string
  swaggerUrl?: string
  customSiteTitle?: string
  validatorUrl?: string
  url?: string
  urls?: Record<'url' | 'name', string>[]
  patchDocumentOnRequest?: <TRequest = any, TResponse = any>(
    req: TRequest,
    res: TResponse,
    document: OpenAPIObject,
  ) => OpenAPIObject
}

export const APIDOC_ROUTE = 'api/doc'
export const API_ROUTE = 'api/meliclon/v1/'

export enum SCHEMAS_CSS {
  user = '#model-User',
  follower = '#model-Follower',
  products = '#model-Product',
  category = '#model-Category',
  subcategory = '#model-Subcategory',
  reviews = '#model-Review',
  likes = '#model-Like',
}
