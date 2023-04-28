import { Injectable } from '@nestjs/common';
import {User, UserDocument} from "./user.schema";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create (dto: CreateUserDto): Promise<User> {
        const user = await this.userModel.create({...dto, listOfDeeds: [], friends: []});
        return user;
    }

    async getAll (): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }
}
