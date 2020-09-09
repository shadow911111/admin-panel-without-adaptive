$( document ).ready(function() {

    $("#submenu-holder").mouseover(function(){
        $(".submenu").slideDown();
    });

    $(".submenu").mouseleave(function(){
        $(".submenu").slideUp();
    });

    $(".menu-button").click(function(){
        $(".left-menu").toggleClass('open');

        if ($(".left-menu").hasClass('open')) {
            $("main").animate({marginLeft:"17.23vmax"});
            $(".menu-button").animate({marginLeft:"-3.8vmax"});
            $(".header").animate({width: "81.7vmax"});
            $(".left-menu").animate({marginLeft:"0"});
            $(".instruction").text("Press to close menu");
        } else {
            $("main").animate({marginLeft:"0"});
            $(".menu-button").animate({marginLeft:"0"})
            $(".header").animate({width: "98.93vmax"});
            $(".instruction").text("Press to open menu");
            $(".left-menu").animate({marginLeft:"-17.23vmax"});
            $(".left-side").remove();
        }
    })
});