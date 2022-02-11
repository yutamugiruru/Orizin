//ハンバーガーメニュー作成
$(function(){
    $('.burger-btn').on('click',function(){
        $('.burger-btn').toggleClass('close');
        $('.header-modal').fadeToggle(500);
        $('body').toggleClass('noscroll');
    });
});

//homeを押したときの処理
$(function(){
    $('.place-top').on('click', function(){
        $('body, html').animate({scrollTop:0},500);
        return false;
    });
});