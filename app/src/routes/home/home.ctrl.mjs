'use strict';

import logger from '../../config/logger.mjs';
import User from '../../models/User.mjs';

const output = {
    home: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render('home/index');
    },
    login: (req, res) => {
        logger.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render('home/login');
    },
    register: (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
        res.render('home/register');
    },
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();

        const url = {
            method: 'POST',
            path: '/login',
            status: response.error ? 400 : 200,
        };

        log(response, url);

        return res.status(url.status).json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();

        const url = {
            method: 'POST',
            path: '/register',
            status: response.error ? 409 : 201,
        };

        log(response, url);

        return res.status(url.status).json(response);
    },
};

const log = (response, url) => {
    if (response.error) {
        logger.error(`${url.method} ${url.path} ${url.status} "Response: ${response.success}, error: ${response.error}"`);
    } else {
        logger.info(`${url.method} ${url.path} ${url.status} "Response: ${response.success}, msg: ${response.msg || ''}"`);
    }
};

export { output, process };
