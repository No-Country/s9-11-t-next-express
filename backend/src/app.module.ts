import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { CloudinaryModule } from './cloudinary/cloudinary.module'
import { FollowersModule } from './followers/followers.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    CloudinaryModule,
    FollowersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
