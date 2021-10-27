'use strict';

const userName = document.querySelector('#name');
const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const confirmPw = document.querySelector('#pw-confirm');
const registerbtn = document.querySelector('#register-button');

registerbtn.addEventListener('click', () => {
    if (!userName.value) return alert('이름을 입력해 주세요');
    if (!id.value) return alert('아이디를 입력해 주세요');
    if (!pw.value) return alert('비밀번호를 입력해 주세요');
    if (pw.value !== confirmPw.value) return alert('비밀번호가 일치하지 않습니다.');

    let requestData = {
        userName: userName.value,
        userId: id.value,
        userPw: pw.value,
        userconfirmPw: confirmPw.value,
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
        .then(res => res.json())
        .then(res => {
            if (res.success === true) {
                location.href = '/login';
            } else {
                alert(res.msg);
            }
        })
        .catch(err => {
            console.log('register error');
        });
});

// banco1004!
