import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DataController } from './data/data.controller';
import { DataModule } from './data/data.module';

@Module({
  imports: [AuthModule, DataModule],
  controllers: [AppController, DataController],
  providers: [AppService],
})
export class AppModule {}
