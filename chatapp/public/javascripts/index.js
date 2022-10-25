'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    router.get('/room', function(request, response) {
      // views/rakus.hbs を表示する
      // 第2引数で views/rakus.hbs の {{title}}, {{message}} に表示する文字をセットしている
      response.render('room', {login_user:userName/* ここに表示したい値を記述する */});
    });
    // ユーザ名が未入力でないかチェックする


    $('form').submit();
}
