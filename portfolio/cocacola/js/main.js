$(document).ready(function(){
    
    $("nav > ul > li").mouseenter(function(){
        $(this).children(".submenu").stop().slideDown(400);
      });
      $("nav > ul > li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp(200);
      });
      //menu

      $('.cont1 .box').slick({
          arrows:true,
          dots : true,
          speed:1000,
          autoplay:true,
          autoplaySpeed:1000,
      });
      //slick

      $('.cont3 .box1 .front').click(function(){
        $('.cont3 .box1 .back').fadeIn().css({
            display:'block'
        }),$(this).fadeOut();
    });
    $('.cont3 .box1 .back').click(function(){
        $('.cont3 .box1 .front').fadeIn().css({
            display:'block'
        }),$(this).fadeOut();
    });
    $('.cont3 .box2 .front').click(function(){
        $('.cont3 .box2 .back').fadeIn().css({
            display:'block'
        }),$(this).fadeOut();
    });
    $('.cont3 .box2 .back').click(function(){
        $('.cont3 .box2 .front').fadeIn().css({
            display:'block'
        }),$(this).fadeOut();
    });
    $('.cont3 .box3 .front').click(function(){
        $('.cont3 .box3 .back').fadeIn().css({
            display:'block'
        }),$(this).fadeOut();
    });
    $('.cont3 .box3 .back').click(function(){
        $('.cont3 .box3 .front').fadeIn().css({
            display:'block'
        }),$(this).fadeOut();
    });
    $('.cont3 .box4 .front').click(function(){
        $('.cont3 .box4 .back').fadeIn().css({
            display:'block'
        }),$(this).fadeOut();
    });
    $('.cont3 .box4 .back').click(function(){
        $('.cont3 .box4 .front').fadeIn().css({
            display:'block'
        }),$(this).fadeOut();
    });
    //cont3
});