


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
    $('.home-top').on('click', function(){
        $('body, html').animate({scrollTop:0},500);
        return false;
    });
});

//スライダー実装
$(function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:5000,
        speed:3000,
        fade:true
    });
});

//invite-shoot,contents-itemをスライドアニメーション実装   

$(function(){
    let mainTop = $('main').offset().top-600;
    $(window).on('scroll', function(){
        var inshTop = $(this).scrollTop();
        if(inshTop >= mainTop){
            $('.invite-shoot').addClass('is-show')
        };
    });
}) ;

$(function(){
    let uirs = $('.uirs-in-wrapper');
    let uirsTop = uirs.offset().top;

    $(window).on('scroll',function(){
        var arclTop = $(this).scrollTop();
        if(arclTop >= uirsTop + 100){
            $('.risk-1').addClass('is-open');
            if(arclTop >= uirsTop + 300){
                $('.risk-2').addClass('is-open');
            };
        };
    });

});