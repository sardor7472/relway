window.log = function(param){
    console.log(param);
};

$(function(){

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		$doc = $(document),
		$win = $(window),
		$html = $(document.documentElement);

	$('table').wrap('<div class="table-wrapper"></div>');

	resizeController(1260, function() {
		log("Функция будет вызвана меньше чем 1260");
	}, function() {
		log("Функция будет вызвана больше чем 1260");
	});

	/*alignElements*/
	function blocksMatchHeight(arr) {
		for (var i = 0; i< arr.length; i++) {
			$(arr[i]).matchHeight();
		}
	}
	var alignElemets = function(){
		blocksMatchHeight([
			'.test'
		]);	
	}
	alignElemets();
	/*alignElements*/

	/*orientationChange*/
	window.addEventListener("orientationchange", function() {
		setTimeout(alignElemets, 500);
		log("orientationChange");
	}, false);
	/*orientationChange*/


	// Esc button
    $doc.on('keyup', function(keyUp){
	    if (keyUp.keyCode 
	    	== 27) {

	    	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
	    	
	        return false;
	    };
	});
	// Esc button

	// Document click begin
	$doc.on('click', function(event){
        if ( $(event.target).closest('.wrapper, .ui-datepicker, .ui-datepicker a, .ui-corner-all').length ){}else {
        	$('.block').removeClass('active');
	      	$html.removeClass('overflowHidden');
        };
    });
    // Document click end
    $(document).ready(function(){

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

  	$('.lang').children('a').click(function(){
  		$(this).parent().find('ul').children('li').toggleClass('open');
  		// $(this).parent().find('ul').children('li').slideToggle(500);
  		// $(this).toggleClass('up');
  	
  		
  	});


    });



	var header = $('.header');


	var toggleBtn = $('.toggleBtn'),
		header = $('.header');

	console.log(toggleBtn)

	$(document).on('click', toggleBtn, function () {
		header.toggleClass('active')
	})
});