'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    // ユーザ名が未入力でないかチェックする
    //未入力であったら、エラー画面へ
    if (userName === ''){
      location.href='./error.hbs';
    }else{
      $('form').submit();
    }
}
