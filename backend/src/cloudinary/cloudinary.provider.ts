import { v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY, CLOUDINARY_CONFIG } from './constants'
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return cloudinary.config(CLOUDINARY_CONFIG)
  },
}
