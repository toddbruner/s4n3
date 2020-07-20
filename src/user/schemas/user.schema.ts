import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { getEpoch } from '../../shared/utils';

@Schema()
export class User extends Document {
    @Prop()
    id: number;

    @Prop({default: getEpoch()})
    created: number;

    @Prop({default: getEpoch()})
    updated: number;

    @Prop({ default: 'unknown' })
    username: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);