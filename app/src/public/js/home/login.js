'use strict';

const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const loginbtn = document.querySelector('button');

loginbtn.addEventListener('click', () => {
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
                alert(res.msg);
            }
        })
        .catch(err => {
            console.log('login error');
        });
});
