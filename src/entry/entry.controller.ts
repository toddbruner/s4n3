import { 
    Controller, Get, Res, HttpStatus, 
    Param, NotFoundException, Post, 
    Body, Put, Query, Delete, } from '@nestjs/common';
import { Entry } from './schemas/entry.schema';
import { EntryService } from './entry.service';
import { CreateEntryDto } from './dto/create-entry.dto';

@Controller('entry')
export class EntryController {

    constructor(private entryService: EntryService) {}

    @Post()
    createTask( @Body() createEntryDto: CreateEntryDto): Promise<Entry> {
            return this.entryService.createEntry(createEntryDto);
    }
}