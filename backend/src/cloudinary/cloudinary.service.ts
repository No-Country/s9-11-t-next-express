import { Injectable } from '@nestjs/common'
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
} from 'cloudinary'
import { CLOUDINARY_CONFIG, CLOUDINARY_FOLDERS } from './constants'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>(CLOUDINARY_CONFIG.NAME),
      api_key: this.configService.get<string>(CLOUDINARY_CONFIG.KEY),
      api_secret: this.configService.get<string>(CLOUDINARY_CONFIG.SECRET),
      secure: true,
    })
  }
  async uploadFileCloudinary(
    file: Express.Multer.File,
    publicId: string,
    folder: string = CLOUDINARY_FOLDERS.DEFAULT,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: 'auto',
            folder,
            public_id: publicId,
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

  async uploadFilesCloudinary(
    files: Array<Express.Multer.File>,
    publicIds?: string[],
    folder: string = CLOUDINARY_FOLDERS.DEFAULT,
  ): Promise<(UploadApiResponse | UploadApiErrorResponse)[]> {
    const promises = files.map(
      (file, index) =>
        new Promise<UploadApiResponse | UploadApiErrorResponse>(
          (resolve, reject) => {
            cloudinary.uploader
              .upload_stream(
                {
                  resource_type: 'auto',
                  folder,
                  public_id: publicIds[index],
                  overwrite: true,
                },
                (error, result) => {
                  if (error) return reject(error)
                  resolve(result)
                },
              )
              .end(file.buffer)
          },
        ),
    )
    return Promise.all(promises)
  }
}
