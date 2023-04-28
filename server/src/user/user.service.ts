import {Injectable, UnauthorizedException} from '@nestjs/common';
import {User, UserDocument} from "./user.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateUserDto} from "./dto/create-user.dto";
import {JwtService} from "@nestjs/jwt";


@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService
    ) {}

    async create (dto: CreateUserDto) {
        const user = await this.userModel.create({...dto, listOfDeeds: [], friends: []});
        const payload = {username: user.userName, sub: user._id};
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async findUser(userName: string){
        return this.userModel.findOne(({userName: userName}));
    }

    async getAll (): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }
}
