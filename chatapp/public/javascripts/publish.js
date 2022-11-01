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
    //自分のユーザネームを格納
    const myname = $('#userName').val();
    //自分だったら文字を青く
    if (data.indexOf(myname) !== -1){
      $('#thread').prepend('<p style="color:blue">' + data + '</p>');
    }else{
      $('#thread').prepend('<p>' + data + '</p>');
    }
});
