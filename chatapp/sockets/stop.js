'use strict';

module.exports = function (socket, io) {
  // 退室メッセージをクライアントに送信する
  socket.on('stopMyselfEvent', function (data) {
    console.log('クライアントの入力値：' + data);
    // 自クライアントに一時休止イベントを送信する
    io.socket.emit('stopMyselfEvent', data);
  });
  socket.on('stopOtherEvent', function (data) {
    // 他クライアントに一時休止イベントを送信する
    io.socket.broadcast.emit('stopOtherEvent', data);
    console.log('クライアントの入力値：' + data);
    });
};
