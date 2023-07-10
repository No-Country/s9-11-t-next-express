import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  getRegards(name: string): string {
    return `Hello ${name}`
  }
}
