import client from './client';

const login = (email: string, password: string) => client.post('/auth/login', { email, password }).then(r => r.data);
const setupPassword = (userId: number, newPassword: string) => client.put('/auth/setup-password', {userId, password: newPassword}).then(r => r.data);

export const authApi = {
    login,
    setupPassword,
};