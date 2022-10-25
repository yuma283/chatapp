'use strict';

// 入室メッセージをサーバに送信する

// 入力されたユーザ名を取得する
const userName = $('#userName').val();
console.log(userName);
// 入室メッセージイベントを送信する
socket.emit('enterMyselfEvent','あなたが入室しました');
socket.emit('enterOtherEvent',userName+'さんが入室しました');
// サーバから受信した入室メッセージを画面上に表示する
socket.on('enterMyselfEvent', function (data) {
    // 画面上にメッセージを表示
    $('#thread').prepend('<p>' + data + '</p>');
});

// 自クライアント以外の接続イベント（enterOtherEvent）を受信する
socket.on('enterOtherEvent', function (data) {
    // 画面上にメッセージを表示
    $('#thread').prepend('<p>' + data + '</p>');
});