'use strict';

class UserStorage {
    // 사용자 정보
    static #users = {
        id: ['vericras', 'zizimoos'],
        pw: ['1234', '12345'],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.userID);
        users.pw.push(userInfo.userPw);
        users.name.push(userInfo.userName);

        return { success: true };
    }
}

module.exports = UserStorage;
