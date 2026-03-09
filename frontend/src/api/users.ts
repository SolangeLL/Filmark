import client from './client';
import { User } from '../types/user';

const findAll = (): Promise<User[]> => client.get('/users').then(r => r.data);

export const usersApi = {
  findAll
};