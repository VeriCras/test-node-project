'use strict';

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
};

const users = {
    id: ['vericras', 'zizimoos'],
    pw: ['1234', '1234'],
};

const process = {
    login: (req, res) => {
        const id = req.body.userId;
        const pw = req.body.userPw;
        const response = {};

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pw[idx] === pw) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = '로그인에 실패했습니다';

        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
