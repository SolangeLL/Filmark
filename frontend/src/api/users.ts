import client from './client';

const findAll = () => client.get('/users', ).then(r => r.data);

export const usersApi = {
    findAll
};