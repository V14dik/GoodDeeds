import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Deed, DeedDocument} from "./deed.schema";
import {Model} from "mongoose";
import {CreateDeedDto} from "./create-deed.dto";

@Injectable()
export class DeedService {
    constructor(@InjectModel(Deed.name) private deedModel:Model<DeedDocument>) {}

    async create(deed: CreateDeedDto) {
        const newDeed = await this.deedModel.create(deed);
        return newDeed;
    }

    async findDeed(deedId) {
        return this.deedModel.findById(deedId);
    }

    async findUserDeeds(userId) {
        return this.deedModel.find({user: userId});
    }

    async delete(id) {
        await this.deedModel.findByIdAndDelete(id);
    }

    async edit(id, deed) {
        const newDeed = await this.deedModel.findByIdAndUpdate(id, {...deed}, {new: true});
        return newDeed;
    }
}
