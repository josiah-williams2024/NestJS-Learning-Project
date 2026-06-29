import { Injectable } from '@nestjs/common';
import { Sport } from './sports.model';

@Injectable()
export class SportsService {
  findAll(): Sport[] {
    return [
      {
        id: 1,
        name: 'Basketball',
        experience: '18 years',
      },
      {
        id: 2,
        name: 'Volleyball',
        experience: '15 years',
      },
      {
        id: 3,
        name: 'Badminton',
        experience: '13 years',
      },
    ];
  }
}
