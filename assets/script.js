(function ($) {
  ('use strict');

  /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/
  $('.select').niceSelect();

  // Toggle mobile navigation
  function toggleMobileNavigation() {
    var navbar = $('.navigation-holder');
    var openBtn = $('.mobail-menu .open-btn');
    var xbutton = $('.mobail-menu .navbar-toggler');

    openBtn.on('click', function (e) {
      e.stopImmediatePropagation();
      navbar.toggleClass('slideInn');
      xbutton.toggleClass('x-close');
      return false;
    });
  }

  toggleMobileNavigation();

  // Function for toggle class for small menu
  function toggleClassForSmallNav() {
    var windowWidth = window.innerWidth;
    var mainNav = $('#navbar > ul');

    if (windowWidth <= 991) {
      mainNav.addClass('small-nav');
    } else {
      mainNav.removeClass('small-nav');
    }
  }

  toggleClassForSmallNav();

  // Function for small menu
  function smallNavFunctionality() {
    var windowWidth = window.innerWidth;
    var mainNav = $('.navigation-holder');
    var smallNav = $('.navigation-holder > .small-nav');
    var subMenu = smallNav.find('.sub-menu');
    var megamenu = smallNav.find('.mega-menu');
    var menuItemWidthSubMenu = smallNav.find('.menu-item-has-children > a');

    if (windowWidth <= 991) {
      subMenu.hide();
      megamenu.hide();
      menuItemWidthSubMenu.on('click', function (e) {
        var $this = $(this);
        $this.siblings().slideToggle();
        e.preventDefault();
        e.stopImmediatePropagation();
        $this.toggleClass('rotate');
      });
    } else if (windowWidth > 991) {
      mainNav.find('.sub-menu').show();
      mainNav.find('.mega-menu').show();
    }
  }

  smallNavFunctionality();

  // Function for toggle class for small menu
  function toggleClassForcatagoryNav() {
    var windowWidth = window.innerWidth;
    var mainNav = $('.mini-shop-content > ul');

    if (windowWidth <= 991) {
      mainNav.addClass('mini-shop-item');
    } else {
      mainNav.removeClass('mini-shop-item');
    }
  }

  toggleClassForcatagoryNav();

  // Function for catagory menu
  function catagoryNavFunctionality() {
    var windowWidth = window.innerWidth;
    var mainNav = $('.header-shop-item');
    var catagoryNav = $('.header-shop-item > .mini-shop-item');
    var menuItemWidthSubMenu = catagoryNav.find('.menu-item-has-children > a');

    if (windowWidth <= 991) {
      menuItemWidthSubMenu.on('click', function (e) {
        var $this = $(this);
        $this.siblings().slideToggle();
        e.preventDefault();
        e.stopImmediatePropagation();
        $this.toggleClass('rotate');
      });
    } else if (windowWidth > 991) {
      mainNav.find('.sub-menu').show();
      mainNav.find('.mega-menu').show();
    }
  }

  catagoryNavFunctionality();

  $('body').on('click', function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $('.menu-close').on('click', function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $('.menu-close').on('click', function () {
    $('.open-btn').removeClass('x-close');
  });

  // toggle3
  $('#toggle3').on('click', function () {
    $('#open3').slideToggle();
    $('.caupon-wrap.s3').toggleClass('coupon-3');
  });

  // HERO SLIDER
  var menu = [];
  jQuery('.swiper-slide').each(function (index) {
    menu.push(jQuery(this).find('.slide-inner').attr('data-text'));
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector('.slide-inner').style.transform =
            'translate3d(' + innerTranslate + 'px, 0, 0)';
        }
      },

      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = '';
        }
      },

      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + 'ms';
          swiper.slides[i].querySelector('.slide-inner').style.transition = speed + 'ms';
        }
      },
    },
  };

  var swiper = new Swiper('.swiper-container', swiperOptions);

  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $('.slide-bg-image');
  sliderBgSetting.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css('background-image', 'url(' + $(this).data('background') + ')');
    }
  });

  //Setting hero slider
  function heroSlider() {
    if ($('.hero-slide-wrap').length) {
      $('.hero-slide-wrap').slick({
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        dots: true,
        fade: true,
        cssEase: 'linear',
      });
    }
  }

  //Active heor slider
  heroSlider();

  /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
  function preloader() {
    if ($('.preloader').length) {
      $('.preloader')
        .delay(100)
        .fadeOut(500, function () {
          //active wow
          wow.init();
        });
    }
  }

  /*------------------------------------------
            = Header search toggle
        -------------------------------------------*/
  if ($('.header-search-form-wrapper').length) {
    var searchToggleBtn = $('.search-toggle-btn');
    var searchToggleBtnIcon = $('.search-toggle-btn i');
    var searchContent = $('.header-search-form');
    var body = $('body');

    searchToggleBtn.on('click', function (e) {
      searchContent.toggleClass('header-search-content-toggle');
      searchToggleBtnIcon.toggleClass('fi flaticon-search fi ti-close');
      e.stopPropagation();
    });

    body
      .on('click', function () {
        searchContent.removeClass('header-search-content-toggle');
      })
      .find(searchContent)
      .on('click', function (e) {
        e.stopPropagation();
      });
  }

  /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
  if ($('.mini-cart').length) {
    var cartToggleBtn = $('.cart-toggle-btn');
    var cartContent = $('.mini-cart-content');
    var cartContent2 = $('.header-right');
    var cartCloseBtn = $('.mini-cart-close');
    var body = $('body');

    cartToggleBtn.on('click', function (e) {
      cartContent.toggleClass('mini-cart-content-toggle');
      cartContent2.toggleClass('active');
      e.stopPropagation();
    });

    cartCloseBtn.on('click', function (e) {
      cartContent.removeClass('mini-cart-content-toggle');
      cartContent2.removeClass('active');
      e.stopPropagation();
    });

    body
      .on('click', function () {
        cartContent.removeClass('mini-cart-content-toggle');
        cartContent2.removeClass('active');
      })
      .find(cartContent)
      .on('click', function (e) {
        e.stopPropagation();
      });
  }

  /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
  var wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
  if ($('.fancybox').length) {
    $('.fancybox').fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      wrapCSS: 'project-fancybox-title-style',
    });
  }

  /*------------------------------------------
            = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  /*------------------------------------------
        = Featured SLIDER
    -------------------------------------------*/
  if ($('.category-slider-active').length) {
    $('.category-slider-active').owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 0,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      navText: ['<i class="icon-angale-right"></i>', '<i class="icon-angale-right2"></i>'],
      nav: false,
      responsive: {
        0: {
          items: 1,
        },

        350: {
          items: 2,
        },
        500: {
          items: 3,
        },

        768: {
          items: 4,
        },
        992: {
          items: 5,
        },

        1200: {
          items: 6,
        },

        1400: {
          items: 6,
        },
      },
    });
  }
  /*------------------------------------------
       product slider
    -------------------------------------------*/
  if ($('.product-active').length) {
    $('.product-active').owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 10,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
      nav: false,
      responsive: {
        0: {
          items: 2,
        },

        350: {
          items: 2,
        },
        500: {
          items: 2,
        },

        768: {
          items: 3,
        },
        992: {
          items: 3,
        },

        1200: {
          items: 4,
        },

        1400: {
          items: 4,
        },
      },
    });
  }

  /*------------------------------------------
       = testimonial-active
   -------------------------------------------*/
  if ($('.testimonial-active').length) {
    $('.testimonial-active').owlCarousel({
      autoplay: true,
      smartSpeed: 300,
      margin: 20,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
      nav: false,
      loop: true,
      autoWidth: true,
      items: 4,

      responsive: {
        0: {
          items: 1,
          autoWidth: false,
        },

        500: {
          items: 1,
        },

        768: {
          items: 2,
        },
        992: {
          items: 2,
        },

        1200: {
          items: 4,
        },

        1400: {
          items: 4,
        },
      },
    });
  }

  $(document).ready(function () {
    $('.product-popup').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
      },
    });
  });

  /*-----------------------
       cart-plus-minus-button 
//      -------------------------*/
  //   $('.cart-plus-minus').append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
  //   $('.qtybutton').on('click', function () {
  //     var $button = $(this);
  //     var oldValue = $button.parent().find('input').val();
  //     if ($button.text() == '+') {
  //       var newVal = parseFloat(oldValue) + 1;
  //     } else {
  //       // Don't allow decrementing below zero
  //       if (oldValue > 0) {
  //         var newVal = parseFloat(oldValue) - 1;
  //       } else {
  //         newVal = 0;
  //       }
  //     }
  //     $button.parent().find('input').val(newVal);
  //   });

  /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
  $('body').append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

  function toggleBackToTopBtn() {
    var amountScrolled = 1000;
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  }

  $('.back-to-top').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });

  /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
  if ($('#contact-form-main').length) {
    $('#contact-form-main').validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },

        email: 'required',

        adress: 'required',

        name: 'required',

        lname: 'required',

        service: 'required',

        phone: 'required',

        note: 'required',

        subject: {
          required: true,
        },
      },

      messages: {
        name: 'Please enter your name',
        lname: 'Please enter your Last name',
        email: 'Please enter your email',
        adress: 'Please enter your adress',
        phone: 'Please enter your Phone',
        service: 'Please select your contact service',
        note: 'Please enter your comment',
      },

      submitHandler: function (form) {
        $.ajax({
          type: 'POST',
          url: 'mail-contact.php',
          data: $(form).serialize(),
          success: function () {
            $('#loader').hide();
            $('#success').slideDown('slow');
            setTimeout(function () {
              $('#success').slideUp('slow');
            }, 3000);
            form.reset();
          },
          error: function () {
            $('#loader').hide();
            $('#error').slideDown('slow');
            setTimeout(function () {
              $('#error').slideUp('slow');
            }, 3000);
          },
        });
        return false; // required to block normal submit since you used ajax
      },
    });
  }

  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on('load', function () {
    preloader();

    toggleMobileNavigation();

    smallNavFunctionality();

    toggleClassForcatagoryNav();
  });

  /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
  $(window).on('scroll', function () {
    var headerSection = $('.site-header');

    if ($(window).scrollTop() > 300) {
      headerSection.addClass('header-fixed fadeInDown animated');
    } else {
      headerSection.removeClass('header-fixed fadeInDown animated');
    }

    // fixed header remove for register page only
    if ($('.site-header').hasClass('header-for-register')) {
      $('.site-header').removeClass('header-fixed fadeInDown animated');
    }

    toggleBackToTopBtn();
  });

  /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
  $(window).on('resize', function () {
    toggleClassForSmallNav();
    //smallNavFunctionality();
    catagoryNavFunctionality();
    clearTimeout($.data(this, 'resizeTimer'));
    $.data(
      this,
      'resizeTimer',
      setTimeout(function () {
        smallNavFunctionality();
      }, 200)
    );
  });

  /*------------------------------------------
        = SHOP DETAILS PAGE PRODUCT SLIDER
    -------------------------------------------*/
  if ($('.shop-single-slider').length) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      vertical: true,
      verticalSwiping: true,
      focusOnSelect: true,
      arrows: false,

      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 5,
            infinite: true,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 5,
          },
        },
      ],
    });
  }
})(window.jQuery);
