(function($) {
  "use strict";
  
  /*------------------------------------------------------------------
  [Table of contents]

  STICKY MENU JS INIT
  COUNTER JS INIT
  COUNTER TWO JS INIT
  NEXTO SLIDER ONE
  NEXTO SLIDER TWO
  NEXTO TEXT SLIDER
  NEXTO SWIPER SLIDER JS INIT
  SCROLL EFFECT ONE JS INIT
  SCROLL EFFECT TWO JS INIT
  SCROLL EFFECT THREE JS INIT
  MAGNIFIC POPUP JS INIT
  CARD LIKE JS INIT
  FOUR COLUMN FILTER JS INIT
  TWO COLUMN FILTER JS INIT
  
  -------------------------------------------------------------------*/
  
  
  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function(){
    return this.length;
  }
  
  
  $(function(){
    
/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});

/*--------------------------------------------------------------
COUNTER TWO JS INIT
--------------------------------------------------------------*/
var fugo_counter = $('#fugo-counter');
  if(fugo_counter.is_exist()){
      var a = 0;
      $(window).scroll(function() {

        var oTop = $(fugo_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.fugo-counter').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          });
          a = 1;
        }

      });
}

/*--------------------------------------------------------------
NEXTO SLIDER ONE
--------------------------------------------------------------*/
var nexto_slider_one = $('.nexto-slider-one');
  if(nexto_slider_one.is_exist()){
    nexto_slider_one.slick({
      infinite: true,
      slidesToShow: 4, 
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplay: true,
	    autoplaySpeed: 2000,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
    
      ]
    });
  }

/*--------------------------------------------------------------
NEXTO SLIDER TWO
--------------------------------------------------------------*/
var nexto_slider_two = $('.nexto-slider-two');
if( nexto_slider_two.is_exist()){
    nexto_slider_two.slick({
    infinite: true,
    slidesToShow: 5, 
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true, 
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    pauseOnHover:true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
  
    ]
  });
}

/*--------------------------------------------------------------
NEXTO TEXT SLIDER
--------------------------------------------------------------*/
  var fugo_text_slider = $('.fugo-text-slider1');
  if(fugo_text_slider.is_exist()){
    fugo_text_slider.slick({
    infinite: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true , 
    autoplaySpeed: 0,
    speed: 10000,
    cssEase: 'linear',
    pauseOnHover:true,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

    ]
  });

}

/*--------------------------------------------------------------
NEXTO TEXT SLIDER
--------------------------------------------------------------*/
var fugo_text_slider2 = $('.fugo-text-slider2');
if(fugo_text_slider2.is_exist()){
  fugo_text_slider2.slick({
  rtl: true,
  infinite: true,
  slidesToShow: 2, 
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true , 
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover:true,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }

  ]
});

}

/*--------------------------------------------------------------
NEXTO TEXT SLIDER
--------------------------------------------------------------*/
var fugo_client_slider = $('.fugo-client-slider');
if(fugo_client_slider.is_exist()){
  fugo_client_slider.slick({
  infinite: true,
  slidesToShow: 5, 
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true , 
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover:true,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    }
  },

  ]
});

}


/*--------------------------------------------------------------
NEXTO TEXT SLIDER
--------------------------------------------------------------*/
var fugo_client_slider2 = $('.fugo-client-slider2');
if(fugo_client_slider2.is_exist()){
  fugo_client_slider2.slick({
  rows: 2,
  infinite: true,
  slidesToShow: 5, 
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true , 
  autoplaySpeed: 0,
  speed: 10000,
  cssEase: 'linear',
  pauseOnHover:true,
  adaptiveHeight: true,
  responsive: [
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    }
  },

  ]
});

}


/*--------------------------------------------------------------
NEXTO TEXT SLIDER
--------------------------------------------------------------*/
var fugo_testimonial_slider = $('.fugo-testimonial-slider');
if(fugo_testimonial_slider.is_exist()){
  fugo_testimonial_slider.slick({
    infinite: true,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    },

    ]
  });

}

/*--------------------------------------------------------------
NEXTO TEXT SLIDER
--------------------------------------------------------------*/
var fugo_testimonial_slider2 = $('.fugo-testimonial-slider2');
if(fugo_testimonial_slider2.is_exist()){
  fugo_testimonial_slider2.slick({
    infinite: true,
    slidesToShow: 2, 
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      }
    },

    ]
  });

}

/*--------------------------------------------------------------
PRICING TABLE JS INIT
------------------------------------------------------------*/
    // Table BTN Trigger
    $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
      console.log($(e.target).parent().parent().hasClass("monthly-active"));
      $(e.target).toggleClass("clicked");
      if ($(e.target).parent().parent().hasClass("monthly-active")) {
        $(e.target)
          .parent()
          .parent()
          .removeClass("monthly-active")
          .addClass("yearly-active");
      } else {
        $(e.target)
          .parent()
          .parent()
          .removeClass("yearly-active")
          .addClass("monthly-active");
      }
    });

    $("[data-pricing-trigger]").on("click", function (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
      var target = $(e.target).attr("data-target");
      console.log($(target).attr("data-value-active") == "monthly");
      if ($(target).attr("data-value-active") == "monthly") {
        $(target).attr("data-value-active", "yearly");
      } else {
        $(target).attr("data-value-active", "monthly");
      }
    });


/*--------------------------------------------------------------
NEXTO SWIPER SLIDER JS INIT
------------------------------------------------------------*/
var swiper_slider = $('.nexto-swiper-slider');
if (swiper_slider.is_exist()){
  swiper_slider = new Swiper(".nexto-swiper-slider", {
  loop: true,
  effect: "cards",
  grabCursor: true,
  autoplay: true,
});
}

/*--------------------------------------------------------------
SCROLL EFFECT TWO JS INIT
------------------------------------------------------------*/
var $rotateTwo = $('#rotatetwo');
var $win = $(window);
$win.on('scroll', function () {
  var right = 16-$win.scrollTop()*0.01;
  $rotateTwo.css('transform', 'rotate(' + right + 'deg)');
});

/*--------------------------------------------------------------
SCROLL EFFECT THREE JS INIT
------------------------------------------------------------*/
var $rotateThree = $('#rotatethree');
var $win = $(window);
$win.on('scroll', function () {
  var right = 41-$win.scrollTop()*0.01;
  $rotateThree.css('transform', 'rotate(' + right + 'deg)');
});

/*--------------------------------------------------------------
MAGNIFIC POPUP JS INIT
------------------------------------------------------------*/
var popup_youtube = $('.fugo-popup');
  if (popup_youtube.is_exist()){
      popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}
/*--------------------------------------------------------------
CARD LIKE JS INIT
------------------------------------------------------------*/
const nextoBtnTigger = document.querySelectorAll('.nexto-tigger');
  nextoBtnTigger.forEach(linkbtn => {
    linkbtn.addEventListener('click', () => {
      linkbtn.classList.toggle("dark-btn");
    });
  })
 
  });/*End document ready*/
  
  
  $(window).on("resize", function(){
    
  
  }); // end window resize
  
  
  $(window).on("load" ,function(){
  
  /*--------------------------------------------------------------
  FOUR COLUMN FILTER JS INIT
  ------------------------------------------------------------*/
  var nexto_filter = $('#nexto-four-column');
  if(nexto_filter.is_exist()){
    var $container = $(nexto_filter),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 4;
        } else if (w > 900) {
          columnNum  = 3;
        } else if (w > 600) {
          columnNum  = 2;
        } else if (w > 450) {
          columnNum  = 1;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.collection-grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width,
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.nexto-portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');
  
      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    });
  }
  
  /*--------------------------------------------------------------
  TWO COLUMN FILTER JS INIT
  ------------------------------------------------------------*/
  var nexto_filter = $('#nexto-two-column');
  if(nexto_filter.is_exist()){
    var $container = $(nexto_filter),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 2;
        } else if (w > 900) {
          columnNum  = 2;
        } else if (w > 600) {
          columnNum  = 1;
        } else if (w > 450) {
          columnNum  = 1;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.collection-grid-item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
            multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
          $item.css({
            width: width,
            //height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.collection-grid-item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 0
          }
        });
      };
    isotope();
    $(window).resize(isotope);
    var $optionSets = $('.nexto-portfolio-menu .option-set'),
        $optionLinks = $optionSets.find('li');
    $optionLinks.click(function(){
    var $this = $(this);
      var $optionSet = $this.parents('.option-set');
      $optionSet.find('.active').removeClass('active');
      $this.addClass('active');
  
      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // creativewise, apply new options
        $container.isotope( options );
      }
      return false;
    });
  }
  
  
  }); // End window LODE
  


  })(jQuery);
  
  
  
  
  
  
  