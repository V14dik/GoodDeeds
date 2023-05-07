import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';
import {User} from "../user/user.schema";

export type DeedDocument = HydratedDocument<Deed>;

@Schema()
export class Deed {
    @Prop()
    content: string;

    @Prop({type: Types.ObjectId, ref: "User"})
    user: User
}

export const DeedSchema = SchemaFactory.createForClass(Deed);