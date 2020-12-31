import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
@Controller('cats')
export class CatsController {
  constructor(private  catsService: CatsService) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    const result =  this.catsService.create(createCatDto);
    return { message: 'Thank you!', result };
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
}
