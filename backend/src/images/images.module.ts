import { Module } from '@nestjs/common'
import { CloudinaryService } from '../cloudinary/cloudinary.service'
import { ConfigModule } from '@nestjs/config'

@Module({
  providers: [CloudinaryService],
  exports: [CloudinaryService],
  imports: [ConfigModule],
})
export class ImagesModule {}
