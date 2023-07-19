import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { User, UserSchema } from './entities/user.entity'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './strategies/jwt.strategy'
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module'

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '2h',
        },
      }),
    }),
    CloudinaryModule,
  ],
  exports: [MongooseModule, JwtStrategy, PassportModule, JwtModule],
})
export class UsersModule {}
