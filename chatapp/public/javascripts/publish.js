'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    console.log(userName)
    // 入力されたメッセージを取得
    const input_message = $('#message').val();;
    const message = userName + "さん：" + input_message
    // 投稿内容を送信
    // メッセージ入力イベント（sendMessageEvent）を送信する
    socket.emit('sendMessageEvent', message);
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('receiveMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
