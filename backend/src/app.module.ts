import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { CloudinaryModule } from './cloudinary/cloudinary.module'
import { CategoriesModule } from './categories/categories.module'
import { SubcategoriesModule } from './subcategories/subcategories.module'
import { ProductsModule } from './products/products.module'
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    CloudinaryModule,
    CategoriesModule,
    SubcategoriesModule,
    ProductsModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
