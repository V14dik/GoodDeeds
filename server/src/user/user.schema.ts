import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import {Deed} from "../deed/deed.schema";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    userName: string;

    @Prop()
    passwordHash: string;

    @Prop({type: [{type: Types.ObjectId, ref: "User"}]})
    friends: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);