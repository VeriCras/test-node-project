'use strict';

const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const loginbtn = document.querySelector('button');

loginbtn.addEventListener('click', () => {
    if (!id.value) return alert('아이디를 입력해 주세요');
    if (!pw.value) return alert('비밀번호를 입력해 주세요');

    let requestData = {
        userId: id.value,
        userPw: pw.value,
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
        .then(res => res.json())
        .then(res => {
            if (res.success === true) {
                location.href = '/';
            } else {
                if (res.error) return alert(res.error);
                else alert(res.msg);
            }
        })
        .catch(err => {
            console.log('login error');
        });
});
