'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('enterMyselfEvent', function (data) {
        // 自クライアントに接続イベント（enteringMyselfEvent）を送信する
        socket.emit('enterMyselfEvent', data);
    });
    socket.on('enterOtherEvent', function (data) {
        // 自クライアント以外に接続イベント（enterOtherEvent）を送信する
        socket.broadcast.emit('enterOtherEvent', data);
    });
};
