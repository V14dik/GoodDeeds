import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './config/db-connect.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DeedModule } from './deed/deed.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://0.0.0.0:27017/test"), UserModule, DeedModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
