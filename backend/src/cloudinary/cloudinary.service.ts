import { Injectable } from '@nestjs/common'
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
} from 'cloudinary'
import { CLOUDINARY_FOLDER } from './constants'
@Injectable()
export class CloudinaryService {
  async uploadFileCloudinary(
    file: Express.Multer.File,
    publicId: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: 'auto',
            folder: CLOUDINARY_FOLDER,
            public_id: `${publicId}`,
            overwrite: true,
          },
          (error, result) => {
            if (error) return reject(error)
            resolve(result)
          },
        )
        .end(file.buffer)
    })
  }
}
