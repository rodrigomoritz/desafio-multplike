import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('data')
export class DataController {
  private data = [];

  @Post()
  create(@Body() createDataDto: any) {
    const newItem = { id: this.data.length + 1, ...createDataDto };

    this.data.push(newItem);

    return newItem;
  }

  @Get()
  findAll() {}
}
