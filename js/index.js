var width1=$(window).width();
var height1=$(window).height();
$('.box').css('height',height1-240);
$(document).ready(function(){
    var timejg=5000;
    var size = $('.box_img ul li').size();
    for(var i=1;i<=size;i++){
        $('.box_tab').append('<a href="javascript:(void)"></a>')
    }

    $('.box_img ul li').eq(0).show();
    $('.box_tab a').eq(0).addClass('active');
    $('.box_tab a').mouseover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        i=index;
        $('.box_img ul li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });

    var i = 0;
    var time = setInterval(move,timejg);

    function move(){
        i++;
        if(i==size){
            i=0;
        }

        $('.box_tab a').eq(i).addClass('active').siblings().removeClass('active');
        $('.box_img ul li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }

    $('.box').hover(function(){
        clearInterval(time);
    },function(){
        time = setInterval(move,timejg);
    });
});
//“Ù¿÷øÿ÷∆
$('.music').click(function(){
    if($(this).hasClass('play')){
        $(this).removeClass('play').removeClass('music1').addClass('music2');
        $(this).css('animation','none');
        $('audio')[0].pause();
    }else{
        $(this).addClass('play').removeClass('music2').addClass('music1');
        $('audio')[0].play();
        $(this).css('animation','music 5s linear infinite');
    }
});