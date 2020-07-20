import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Entry } from './schemas/entry.schema';
import { CreateEntryDto } from './dto/create-entry.dto';

@Injectable()
export class EntryService {
    constructor(
        @InjectModel(Entry.name) private entryModel: Model<Entry> 
    ){}

    async createEntry(createEntryDto: CreateEntryDto): Promise<Entry> {
        const createdEntry = new this.entryModel(createEntryDto);
        return createdEntry.save();
    }

    async findAll(): Promise<Entry[]> {
        return this.entryModel.find().exec();
    }

}