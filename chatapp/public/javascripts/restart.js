"use strict";

function restart() {
    socket.connect();
    // ユーザ名取得
    const userName = $("#userName").val();
    // 自クライアントに一時休止イベントを送信する
    socket.emit("restartMyselfEvent", "あなたが再開しました");
    // 他クライアントに一時休止メッセージイベントを送信する
    socket.emit("restartOtherEvent", userName + "さんが再開しました");
    console.log("finish");
    return false;
}

// サーバから受信したrestartメッセージを画面上に表示する
socket.on("restartOtherEvent", function (data) {
    $("#thread").prepend('<p style="text-align: right">' + data + "</p>");
});
socket.on("restartMyselfEvent", function (data) {
    $("#thread").prepend("<p>" + data + "</p>");
});
