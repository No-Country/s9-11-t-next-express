import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModuleRun } from './apiDocs/SwaggerInit'
import { API_ROUTE } from './apiDocs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(API_ROUTE)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  SwaggerModuleRun(app)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
