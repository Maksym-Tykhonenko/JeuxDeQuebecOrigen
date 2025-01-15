import {IMAGES} from '../constants/images';

export interface User {
  id: string;
  image: any;
  name: string;
  lastName: string;
  nickname: string;
  bonuses: number;
}

export const USERS: User[] = [
  {
    id: '1',
    image: IMAGES.photo1,
    name: 'Valeria',
    lastName: 'Tuvodar',
    nickname: 'valeria_tuvodar',
    bonuses: 4000,
  },
  {
    id: '2',
    image: IMAGES.photo2,
    name: 'Yana',
    lastName: 'Dan',
    nickname: 'yana_dan',
    bonuses: 3000,
  },
  {
    id: '3',
    image: IMAGES.photo3,
    name: 'Bank',
    lastName: 'Tata',
    nickname: 'bank_tata',
    bonuses: 2900,
  },
  {
    id: '4',
    image: IMAGES.photo4,
    name: 'Maruna',
    lastName: 'Shelever',
    nickname: 'maruna_shelever',
    bonuses: 2600,
  },
];
