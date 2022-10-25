'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const input_message = $('#message').val();;
    const message = userName + "さんのメモ：" + input_message    // メモの内容を表示
    $('#thread').prepend('<p>' + message + '</p>'); 
    return false;
}
