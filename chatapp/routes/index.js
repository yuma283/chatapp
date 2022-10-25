'use strict';

const express = require('express');
const router = express.Router();


// ログイン画面の表示
router.get('/', function(request, response, next) {
    const userName = $('#userName').val();
    response.render('index');
});

// チャット画面の表示
router.post('/room', function(request, response, next) {
    console.log('ユーザ名：' + request.body.userName);
    response.render('room', { myname: userName });
});

module.exports = router;
