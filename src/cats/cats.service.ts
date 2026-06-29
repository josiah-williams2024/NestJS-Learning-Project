import { Injectable } from '@nestjs/common';
import { Cat } from './cats.model';
//Normally this would be a query to a database,
//But for the learning I will store the data here
@Injectable()
export class CatsService {
  findAll(): Cat[] {
    return [
      {
        id: 1,
        name: 'Zoey',
        age: 8,
        breed: 'Tabby',
      },
      {
        id: 2,
        name: 'Simba',
        age: 7,
        breed: 'Tuxedo',
      },
    ];
  }
}
