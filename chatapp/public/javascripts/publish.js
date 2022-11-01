"use strict";

// 最後にメッセージを送信したユーザー
var lastuser = "";

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $("#userName").val();
    console.log("publish:" + userName);
    // ユーザ名と最後の投稿者が一致したらメッセージを送信しない
    if (lastuser == userName) {
        alert("連続投稿できません");
        return;
    }
    // 入力されたメッセージを取得
    const input_message = $("#message").val();

    // 時刻を取得
    var now = new Date();
    var YYYY = now.getFullYear();
    var MM = now.getMonth() + 1;
    var DD = now.getDate();
    var HH = now.getHours();
    var mm = now.getMinutes();
    // 分数の桁揃え
    if (mm < 10){
        mm = "0" + mm;
    }
    // フォーマットに代入
    var formatNowDate = YYYY + "/" + MM + "/" + DD + " " + HH + ":" + mm;
    // 時刻をメッセージに追加
    const message =
        userName + "さん：\n" + input_message + "\n（" + formatNowDate + "）";
    // 投稿内容を送信
    // 内容が空白なら送信しない
    if(!input_message.match(/\S/g)){
        alert("内容を記入してください")
        return;
    }
    // 最後にメッセージを送信したユーザーを変えるイベントの送信
    socket.emit('sendchangeUserEvent',userName);
    // 投稿内容を送信
    // メッセージ入力イベント（sendMessageEvent）を送信する
    socket.emit("sendMessageEvent", message);
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on("receiveMessageEvent", function (data) {
    //自分のユーザネームを格納
    const myname = $("#userName").val();
    //自分だったら文字を青く
    if (data.indexOf(myname) !== -1) {
        $("#thread").prepend('<p style="color:blue">' + data + "</p>");
    } else {
        $("#thread").prepend("<p>" + data + "</p>");
    }
});

// 最後にメッセージを送信したユーザーを変えるイベントの受信
socket.on("receivechangeUserEvent", function (user) {
    lastuser = user;
});
