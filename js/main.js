$(document).ready(function(){
    
    $("section").each(function () {
        $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } else if (event.detail) delta = -event.detail / 3;
          var moveTop = null;
          if (delta < 0) {
              if ($(this).next() != undefined) {
                  moveTop = $(this).next().offset().top;
              }
          } else {
              if ($(this).prev() != undefined) {
                  moveTop = $(this).prev().offset().top;
              }
          }
          $("html,body").stop().animate({
              scrollTop: moveTop + 'px'
          }, {
              duration: 800, complete: function () {
              }
          });
        });
        });
        //전체 부드럽게 스크롤
        
        $('.scroll').slick({
            arrows:true,
            speed:1000,
            autoplay:true,
            autoplaySpeed:2300,
            vertical:true,
            slidesToShow:2,
            slidesToScroll:1,
            verticalSwiping:true,
        });
        //디자인 슬라이드
        
        $(".box1").click(function() {
            $('html,body').animate({
                scrollTop: $("#introduce").offset().top},
                'slow');
        });
        $(".box2").click(function() {
            $('html,body').animate({
                scrollTop: $(".cont1").offset().top},
                'slow');
        });
        $(".box3").click(function() {
            $('html,body').animate({
                scrollTop: $("#design").offset().top},
                'slow');
        });
        $(".box4").click(function() {
            $('html,body').animate({
                scrollTop: $("#footer").offset().top},
                'slow');
        });
        //메뉴 클릭
        
});