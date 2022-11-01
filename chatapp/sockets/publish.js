'use strict';


module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
        if (!data) {
            return;
        }
        console.log('クライアントの入力値：' + data);

        // 全クライアントが受信するメッセージ表示イベント（receiveMessageEvent）を送信する
        io.sockets.emit("receiveMessageEvent", data)
    });

    // 最後にメッセージを送信したユーザーを送る
    socket.on('sendchangeUserEvent', function (user) {
        io.sockets.emit("receivechangeUserEvent", user)
    });
};
