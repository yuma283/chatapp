"use strict";

function restart() {
    // ユーザ名取得
    const userName = $("#userName").val();
    // 自クライアントに一時休止イベントを送信する
    socket.emit("restartMyselfEvent", "あなたが再開しました");
    // 他クライアントに一時休止メッセージイベントを送信する
    socket.emit("restartOtherEvent", userName + "さんが再開しました");
    socket.connect();
    console.log("finish");
    return false;
}
