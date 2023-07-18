import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { APIDOC_ROUTE, API_ROUTE, ExpressSwaggerCustomOptionsI } from './common'
import { INestApplication } from '@nestjs/common'

const swaggerOptions: ExpressSwaggerCustomOptionsI = {
  swaggerOptions: {
    supportedSubmitMethods: ['head'],
    ignoreGlobalPrefix: true,
    // defaultModelsExpandDepth: -1,
  },
}
const config = new DocumentBuilder()
  .setTitle('MeliClon-Social')
  .setDescription(`MeliClon-Social Api Doc. \n Base endpoint: ${API_ROUTE}`)
  .setVersion('1.0')
  .build()

export const SwaggerModuleRun = (app: INestApplication<any>) => {
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(APIDOC_ROUTE, app, document, swaggerOptions)
}
