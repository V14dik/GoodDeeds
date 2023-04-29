import {Body, Controller, Get, Post, Query, Delete, Patch} from '@nestjs/common';
import {Deed} from "./deed.schema";
import {CreateDeedDto} from "./create-deed.dto";
import {DeedService} from "./deed.service";

@Controller('deed')
export class DeedController {

    constructor(private deedService: DeedService) {}

    @Get()
    async getDeed(@Query() query): Promise<Deed> {
        return this.deedService.findDeed(query.deedId);
    }

    @Post()
    async createDeed(@Body() dto: CreateDeedDto){
        return this.deedService.create(dto);
    }

    @Delete()
    async deleteDeed(@Query() {deedId}) {
        await this.deedService.delete(deedId);
    }

    @Patch()
    async editDeed(@Query() {deedId}, @Body() deed) {
        return this.deedService.edit(deedId, deed);
    }

    @Get("list")
    async getUserDeeds(@Query() {userId}) {
        return this.deedService.findUserDeeds(userId);
    }
}
