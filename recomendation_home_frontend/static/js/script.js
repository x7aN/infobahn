(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}


	function rellaxInit() {
		const target = document.querySelectorAll('.js-rellax')
		if (!target) return;
	
		var rellax = new Rellax('.js-rellax', {
			breakpoints: [576, 768, 1025]
		});
	}


	function scrollToIdInit() {
		const targets = document.querySelectorAll('.js-scroll-to-id');
		if (!targets.length) return;
	
		targets.forEach(el => {
			el.addEventListener('click', (e) => {
				if (document.querySelector('.is-pin-active'))
					document.querySelector('.is-pin-active').classList.remove('is-pin-active')
					el.classList.add('is-pin-active')
			})
		});
	}
	

	if($('.js-tab-menu').length) {
		const target = document.querySelector('.js-tab-menu');
		const SMcontroller = new ScrollMagic.Controller();
		let sections = document.querySelectorAll(".js-tab-menu-content");
		let sceneDuration = 0;
	
		sections.forEach(el => {
			sceneDuration += el.offsetHeight
		})

		const sceneOffset = document.querySelector('.main-header').offsetHeight;
		let trHook = "onLeave";

		const scene = new ScrollMagic.Scene({
			duration: sceneDuration,
			offset: '-' + sceneOffset + 'px',
			triggerElement: target,
			triggerHook: trHook,
		})
		.setPin(".js-tab-menu")
		.addTo(SMcontroller)
		
		window.addEventListener('resize', () => {
			sections.forEach(el => {
				sceneDuration += el.offsetHeight
			})

			const sceneOffset = document.querySelector('.main-header').offsetHeight;
			scene.duration(sceneDuration);
			scene.offset('-' + sceneOffset + 'px');
			scene.refresh();
		})

		window.addEventListener('scroll', () => {
			const sceneOffset = document.querySelector('.main-header').offsetHeight;
			scene.offset('-' + sceneOffset + 'px');
			scene.refresh();
		})
	}


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header');
			if (windowpos > 1) {
				siteHeader.addClass('fixed-header animated slideInDown');
				scrollLink.fadeIn(300);
			} else{
				siteHeader.removeClass('fixed-header animated slideInDown');
				scrollLink.fadeOut(300);
			}
		}
	}


	function headerProfile() {
		if($('#profile').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var profileHeader = $('.upper-box');
			if(windowpos > 2) {
				siteHeader.removeClass('fixed-header animated slideInDown');
				scrollLink.fadeOut(300);
			}
			if(windowpos > 50) {
				profileHeader.addClass('fixed-profile');
				scrollLink.fadeIn(300);
			} else {
				profileHeader.removeClass('fixed-profile');
				scrollLink.fadeOut(300);
			}
		}
	}

	//sticky-header Hide Show
	if($('.sticky-header').length){
		var stickyMenuContent = $('.main-header .main-box .nav-outer').html();
		$('.sticky-header .main-box').append(stickyMenuContent);
		//Sidebar Cart
		$('.main-header .cart-btn, .mobile-header .cart-btn').on('click', function() {
			$('body').addClass('sidebar-cart-active');
		});

		//Menu Toggle Btn
		$('.main-header .cart-back-drop, .main-header .close-cart').on('click', function() {
			$('body').removeClass('sidebar-cart-active');
		});
	}


	//Jquery Knob animation  // Pie Chart Animation
	if($('.dial').length){
          var elm = $('.dial');
          var color = elm.attr('data-fgColor');  
          var perc = elm.attr('value');  
          elm.knob({ 
               'value': 0, 
                'min':0,
                'max':100,
                'skin':'tron',
                'readOnly':true,
                'thickness':0.45,
				'dynamicDraw': true,
				'displayInput':false
          });

          $({value: 0}).animate({ value: perc }, {
			  duration: 2000,
              easing: 'swing',
              progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
              }
          });


          var $t = $('.pie-graph .count-box'),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
    }



	// Mobile Navigation
	if($('#nav-mobile').length){
		jQuery(function ($) {
		  var $navbar = $('#navbar');
		  var $mobileNav = $('#nav-mobile');
		  
		  $navbar
		    .clone()
		    .removeClass('navbar')
		    .appendTo($mobileNav);
		  
		  $mobileNav.mmenu({
		  	"counters": false,
		  	extensions 	: [ "position-bottom", "fullscreen", "theme-black", ],
		    offCanvas: {
		      position: 'left',
		      zposition: 'front',
		    }
		  });
		});
	}

	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav ul.navigation').onePageNav();
	}

	// Rating Review
	function ratingOverview(ratingElem) {
        $(ratingElem).each(function() {
            var dataRating = $(this).attr('data-rating');
            if (dataRating >= 4.0) {
                $(this).addClass('high');
                $(this).find('.rating-bars-rating-inner').css({
                    width: (dataRating / 5) * 100 + "%",
                });
            } else if (dataRating >= 3.0) {
                $(this).addClass('mid');
                $(this).find('.rating-bars-rating-inner').css({
                    width: (dataRating / 5) * 80 + "%",
                });
            } else if (dataRating < 3.0) {
                $(this).addClass('low');
                $(this).find('.rating-bars-rating-inner').css({
                    width: (dataRating / 5) * 60 + "%",
                });
            }
        });
    }

	// Rating Bars
	$('.rating-bars').appear(function(){
    	ratingOverview('.rating-bars-rating');
	});

	// Leave Rating
	$('.leave-rating input').change(function() {
        var $radio = $(this);
        $('.leave-rating .selected').removeClass('selected');
        $radio.closest('label').addClass('selected');
    });

	// Input Upload 
    var uploadButton = {
        $button: $('.uploadButton-input'),
        $nameField: $('.uploadButton-file-name')
    };
    uploadButton.$button.on('change', function() {
        _populateFileField($(this));
    });

    function _populateFileField($button) {
        var selectedFile = [];
        for (var i = 0; i < $button.get(0).files.length; ++i) {
            selectedFile.push($button.get(0).files[i].name + '<br>');
        }
        uploadButton.$nameField.html(selectedFile);
    }

	//Header Search
	if($('.mobile-search-btn').length) {
		$('.mobile-search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}

	/*=== Header Search Active ===*/
	$(".header-search-form input").focus(function(){
	  $(this).parent().addClass("active");
	  $('body').addClass('search-active')
	});
	$(".header-search-form input").focusout(function(){
	  $(this).parent().removeClass("active");
	  $('.search-list').slideUp();
	  $('body').removeClass('search-active')
	});


	/*=== User Sidebar / On mobile view ===*/
	if($('#toggle-user-sidebar').length) {
		$('#toggle-user-sidebar, .dashboard-option a').on("click", function() {
		  $('body').toggleClass('user-sidebar-active');
		});

		$('.sidebar-backdrop').on("click", function() {
		  $('body').removeClass('user-sidebar-active');
		});
	}

	//Toggle More Options
	if ($('#more-options').length) {
	    $('#more-options').on('click', function(){
	    	$(this).parent().toggleClass('active');
	    });
	}

	//Toggle filters
	if ($('.toggle-filters').length) {
	    $('.toggle-filters').on('click', function(){
	    	$('body').toggleClass('active-filters');
	    });
	    $('.close-filters, .filters-backdrop').on('click', function(){
	    	$('body').removeClass('active-filters');
	    });
	    $('.hide-filters .toggle-filters').on('click', function(){
	    	$(this).html($(this).html() == '<span class="icon flaticon-plus-symbol"></span>Hide Filters' ? '<span class="icon flaticon-controls"></span>Show Filters' : '<span class="icon flaticon-plus-symbol"></span>Hide Filters');
	    });
	    $('.close-filters').on('click', function(){
	    	$('.hide-filters .toggle-filters').html($(this).html() == '<span class="icon flaticon-controls"></span>Hide Filters' ? '<span class="icon flaticon-plus-symbol"></span>Hide Filters' : '<span class="icon flaticon-controls"></span>Show Filters');
	    });
	}

	//Remove Filters On Mobile
	function removeFiltersOnMobile(){
		if ($(window).width() <= 1023) {
	    	$('body').removeClass('active-filters');
	    	$('.hide-filters .toggle-filters').html($(this).html() == '<span class="icon flaticon-controls"></span>Hide Filters' ? '<span class="icon flaticon-plus-symbol"></span>Hide Filters' : '<span class="icon flaticon-controls"></span>Show Filters');
	    }
	}
	removeFiltersOnMobile();


	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

/* 	//Chosen Seclect Box
	if($('.chosen-select').length){
		$(".chosen-select").chosen({
			disable_search_threshold: 10,
			width:'100%',
		});
	}

	//Chosen Search Select
	if($('.chosen-search-select').length){
		$(".chosen-search-select").chosen({
			width:'100%',
		});
	}
 */
	// Custom Select Box
	if ($('.sortby-select').length) {
    	$('.sortby-select').select2();
	}

	// Tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})

	// Open modal in AJAX callback
	$('.call-modal').on('click', function(event) {
	  event.preventDefault();
	  this.blur();
	  $.get(this.href, function(html) {
	    $(html).appendTo('body').modal({
	    	closeExisting: true,
			fadeDuration: 300,
			fadeDelay: 0.15
	    });
	  });
	});


	//Message Box
	if($('.message-box').length){
		$('.message-box .close-btn').on('click', function(e) {
			$(this).parent('.message-box').fadeOut();
		});
	}

	//Chat Contacts
	if($('.toggle-contact').length){
		$('.toggle-contact').on('click', function(e) {
			$('body').toggleClass('active-chat-contacts');
		});
		$('.contacts li').on('click', function(e) {
			$(this).addClass('active');
			$(this).siblings('li').removeClass('active');
			$('body').removeClass('active-chat-contacts');
		});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}

	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Contact Form Validation
	if($('#email-form').length){
		$('#submit').click(function(){
			
            var o = new Object();
            var form = '#email-form';
			
			var username = $('#email-form .username').val();
			var email = $('#email-form .email').val();
			var subject = $('#email-form .subject').val();
			
			if(username == '' || email == '' || subject == '')
			{
				$('#email-form .response').html('<div class="failed">Please fill the required fields.</div>');
				return false;
			}
            
            $.ajax({
                url:"sendemail.php",
                method:"POST",
                data: $(form).serialize(),
                beforeSend:function(){
                    $('#email-form .response').html('<div class="text-info"><img src="images/icons/preloader.gif"> Loading...</div>');
                },
                success:function(data){
                    $('form').trigger("reset");
                    $('#email-form .response').fadeIn().html(data);
                    setTimeout(function(){
                        $('#email-form .response').fadeOut("slow");
                    }, 5000);
                },
                error:function(){
                    $('#email-form .response').fadeIn().html(data);
                }
            });
        });
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}

	// Scroll to a Specific Div
	if($('.listing-nav li').length){
		$(".listing-nav li").on('click', function() {
			var target = $(this).attr('data-target');
			$(this).addClass('active').siblings('li').removeClass('active');
			$(target).appear(function(){
				$(this).addClass('active')
			});
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top + (-90)
			 }, 1000);
		});
	}

	//Make Content Sticky
	if ($('.sticky-sidebar').length) {
	    $('.sidebar-side').theiaStickySidebar({
	      // Settings
	      additionalMarginTop: 90,
	    });
	}

	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	// Home Banners Animations / Mouse Move Animation
	if($('.anm').length){
		anm.on();
	}

	// Chosen touch support.
    if ($('.chosen-container').length > 0) {
      $('.chosen-container').on('touchstart', function(e){
        e.stopPropagation(); 
        e.preventDefault();
        // Trigger the mousedown event.
        $(this).trigger('mousedown');
      });
    }



/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		headerProfile();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);



