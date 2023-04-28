import { Module } from '@nestjs/common';
import { DeedController } from './deed.controller';
import { DeedService } from './deed.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Deed, DeedSchema} from "./deed.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: Deed.name, schema: DeedSchema}])],
  controllers: [DeedController],
  providers: [DeedService]
})
export class DeedModule {}
