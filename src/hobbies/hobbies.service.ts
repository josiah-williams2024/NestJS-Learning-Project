import { Injectable } from '@nestjs/common';
import { Hobby } from './hobbies.model';

@Injectable()
export class HobbiesService {
  findAll(): Hobby[]{
    return [
      {
        id: 1,
        name: 'Gaming',
      },
      {
        id: 2,
        name: 'Basketball',
      },
      {
        id: 3,
        name: 'Swimming',
      },
    ];
  }
}
