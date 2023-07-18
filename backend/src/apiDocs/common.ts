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
