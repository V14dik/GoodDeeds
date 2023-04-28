import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './config/db-connect.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DeedModule } from './deed/deed.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://mongo:mongo@0.0.0.0:27017/test?authSource=admin"),
    UserModule, DeedModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
