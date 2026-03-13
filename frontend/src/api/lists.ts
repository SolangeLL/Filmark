import client from './client';
import { User } from '../types/User';

const findAll = (): Promise<User[]> => client.get('/users').then(r => r.data);
const findById = (userId: number): Promise<User> => client.get(`/users/${userId}`).then(r => r.data);

export const usersApi = {
  findAll,
  findById
};