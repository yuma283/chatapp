'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('exitOtherEvent', function (data) {
        socket.broadcast.emit('exitOtherEvent', data);
        console.log('クライアントの入力値：' + data);

    });
};
