"use strict";

module.exports = function (socket, io) {
    socket.on("restartMyselfEvent", function (data) {
        console.log("クライアントの入力値：" + data);
        // 自クライアントに再開イベントを送信する
        io.socket.emit("restartMyselfEvent", data);
    });
    socket.on("restartOtherEvent", function (data) {
        // 他クライアントに再開イベントを送信する
        io.socket.broadcast.emit("restartOtherEvent", data);
        console.log("クライアントの入力値：" + data);
    });
};
