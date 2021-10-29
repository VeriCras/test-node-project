'use strict';

import UserStorage from './UserStorage.mjs';

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;

        try {
            const user = await UserStorage.getUserInfo(client.userId);
            if (user) {
                if (user.id === client.userId && user.password === client.userPw) {
                    return { success: true };
                }
                return { success: false, msg: '비밀번호가 틀렸습니다.' };
            }
            return { success: false, msg: '존재하지 않는 아이디입니다.' };
        } catch (error) {
            return { success: false, error };
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (error) {
            return { success: false, error };
        }
    }
}

export default User;
