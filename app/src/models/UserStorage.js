'use strict';

const db = require('../config/db');

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users where id = ?;';
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                else resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const queryUser = 'SELECT * FROM users where id = ?;';
            db.query(queryUser, [userInfo.userId], (err, data) => {
                if (err) reject(`${err}`);
                if (data[0]) resolve({ success: false, msg: '이미 존재하는 회원입니다.' });

                const query = 'INSERT INTO users(id, name, password) VALUES(?, ?, ?);';
                db.query(query, [userInfo.userId, userInfo.userName, userInfo.userPw], err => {
                    if (err) reject(`${err}`);
                    else resolve({ success: true });
                });
            });
        });
    }
}

module.exports = UserStorage;
