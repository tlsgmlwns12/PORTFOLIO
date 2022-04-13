
$(function(){
    $('.menu > li:nth-child(1) > a').click(function(){
        $('.menu > li:nth-child(1) > ul').slideToggle(500);
        });

 $('.menu > li:nth-child(2) > a').click(function(){
    $('.menu > li:nth-child(2) > ul').slideToggle(500);
    });

    $('.menu > li:nth-child(3) > a').click(function(){
        $('.menu > li:nth-child(3) > ul').slideToggle(500);
        });

    $(window).on("mousemove", (e) => {
            $(".cursor").css({
                top: e.pageY + "px",
                left: e.pageX + "px"
            });
        });
});