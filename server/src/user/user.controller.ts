import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {CreateUserReqDto} from "./dto/create-user.req.dto";
import * as bcrypt from "bcrypt";
import {SignInReqDto} from "./dto/sigh-in.req.dto";

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
}
