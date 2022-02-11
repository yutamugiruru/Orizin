

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
    $('.menu-top').on('click', function(){
        $('body, html').animate({scrollTop:0},500);
        return false;
    });
});

//スライダー実装処理
$(function(){
    $('.slick-01').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});