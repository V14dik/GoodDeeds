import {Body, Controller, Get, Post, Query, Delete, Patch, UseGuards, Request} from '@nestjs/common';
import {Deed} from "./deed.schema";
import {CreateDeedDto} from "./create-deed.dto";
import {DeedService} from "./deed.service";
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('deed')
export class DeedController {

    constructor(private deedService: DeedService) {}

    @Get()
    async getDeed(@Query() query): Promise<Deed> {
        return this.deedService.findDeed(query.deedId);
    }
    @UseGuards(AuthGuard)
    @Post()
    async createDeed(@Body() dto, @Request() {user}) {
        return this.deedService.create({...dto, user: user.sub});
    }

    @Delete()
    async deleteDeed(@Query() {deedId}) {
        await this.deedService.delete(deedId);
    }

    @Patch()
    async editDeed(@Query() {deedId}, @Body() deed) {
        return this.deedService.edit(deedId, deed);
    }
    @UseGuards(AuthGuard)
    @Get("list")
    async getUserDeeds(@Request() {user}) {
        return this.deedService.findUserDeeds(user.sub);
    }
}
