import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { getEpoch } from '../../shared/utils';

@Schema()
export class Entry extends Document {
    @Prop()
    id: number;

    @Prop({default: getEpoch()})
    created: number;

    @Prop({default: getEpoch()})
    updated: number;

    @Prop({ default: 'unknown' })
    owner: string;

    @Prop()
    body: string;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);