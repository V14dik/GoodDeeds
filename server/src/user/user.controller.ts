import {Body, Controller, Delete, Get, Patch, Post, Query} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {CreateUserReqDto} from "./dto/create-user.req.dto";
import * as bcrypt from "bcrypt";


@Controller('/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async create(@Body() dto: CreateUserReqDto) {
        const salt = await bcrypt.genSalt(10);
        const passwordHash  = await bcrypt.hash(dto.password, salt);
        const user: CreateUserDto = {userName: dto.userName, passwordHash: passwordHash}
        return this.userService.create(user);
    }

    @Patch()
    async updateUserInfo(@Query() {userId}, @Body() info) {
        return this.userService.update(userId, info);
    }

    @Delete()
    async deleteUser(@Query() {userId}) {
        await this.userService.delete(userId);
    }

    @Get("search")
    async searchByName(@Query() {userName}){
        return this.userService.searchByName(userName);
    }
}
