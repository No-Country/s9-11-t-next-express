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
  app.enableCors({
    credentials: true,
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.CLIENT_URL
        : process.env.DEV_CLIENT_URL,
  })

  SwaggerModuleRun(app)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
