import { 
    Controller, Get, Res, HttpStatus, 
    Param, NotFoundException, Post, 
    Body, Put, Query, Delete, } from '@nestjs/common';
import { Cat } from './schemas/cat.schema';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Post()
    createTask( @Body() createCatDto: CreateCatDto): Promise<Cat> {
            return this.catsService.createCat(createCatDto);
    }
}

