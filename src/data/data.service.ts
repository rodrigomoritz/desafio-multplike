import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DataService {
  private data = [];

  create(createDataDto: any) {
    const newItem = { id: this.data.length + 1, ...createDataDto };
    this.data.push(newItem);
    return newItem;
  }

  findAll() {
    return this.data;
  }

  findOne(id: number) {
    const item = this.data.find((item) => item.id === id);
    if (!item) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    return item;
  }

  update(id: number, updateDataDto: any) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    this.data[index] = { ...this.data[index], ...updateDataDto };
    return this.data[index];
  }

  remove(id: number) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    this.data.splice(index, 1);
    return { message: `Item with id ${id} deleted` };
  }
}
