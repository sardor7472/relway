
$(document).ready(function () {

    var nav = $('.header nav'),
        toggleBtn = $('.header-burger'),
        closeBtn = $('.header-burger-x');

    toggleBtn.on('click', function () {
        nav.addClass('active')
    });

    closeBtn.on('click', function () {
        nav.removeClass('active')
    });

    //-------------------------------- HEADER SLIDER ------------------------------------------------------//
    $('.head-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
        items:1
    });
    //-------------------------------- HEADER SLIDER END --------------------------------------------------//


    //-------------------------------- PARTNER SLIDER --------------------------------------------------//

    $('.par__slide').owlCarousel({
        loop:true,
        margin:90,
        nav:true,
        dots:false,
        autoWidth:true,
        // center:true,
        navText: ["<img src='img/pprev.svg'>","<img src='img/pnext.svg'>"],
        items:4,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            426:{
                items:1,
                nav:false,
                margin:10
            },
            767:{
                items:2,
                nav:false
            },
            951:{
                items:3,

                center:true
            },
            1024:{
                items:3
            },
            1220:{
                items:4
            }
        }
    });

    //-------------------------------- PARTNER SLIDER END --------------------------------------------------//

});
