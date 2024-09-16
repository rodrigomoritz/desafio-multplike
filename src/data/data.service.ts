import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  private data = [];

  create(createDataDto: any) {
    const newItem = { id: this.data.length + 1, ...createDataDto };
    this.data.push(newItem);
    return newItem;
  }
}
