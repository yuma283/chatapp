"use strict";

function stop() {
    // ユーザ名取得
    const userName = $("#userName").val();
    // 自クライアントに一時休止イベントを送信する
    socket.emit("stopMyselfEvent", "あなたが一時休止しました");
    // 他クライアントに一時休止メッセージイベントを送信する
    socket.emit("stopOtherEvent", userName + "さんが一時休止しました");
    console.log("finish");
    return false;
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on("stopOtherEvent", function (data) {
    $("#thread").prepend("<p>" + data + "</p>");
});
socket.on("stopMyselfEvent", function (data) {
    $("#thread").prepend("<p>" + data + "</p>");
    console.log(data);
    socket.disconnect();
});
