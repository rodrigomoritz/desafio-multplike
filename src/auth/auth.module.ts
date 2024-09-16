import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: '123456',
      signOptions: {},
    }),
  ],
  providers: [AuthService],
  exports: [],
  controllers: [AuthController],
})
export class AuthModule {}
