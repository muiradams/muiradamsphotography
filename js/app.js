// Adjust the nav scrollbar as the user scrolls down the page
$(window).on('scroll', function () {
  if ($(this).scrollTop() > $('header').height() - 81) {
    $('nav').addClass('nav-background');
    $('nav ul li a').addClass('nav-links-dark');
  } else if(!$('#mobile-menu').is(":visible") || !$('nav ul').is(":visible")) {
    $('nav').removeClass('nav-background');
    $('nav ul li a').removeClass('nav-links-dark');
  }
});

function hideMobileMenu() {
  changeMobileMenuIcon('fa-times', 'fa-bars') 
  if($(window).scrollTop() < $('header').height() - 80) {
    $('nav').removeClass('nav-background');
  }
}

function changeMobileMenuIcon(iconToRemove, iconToAdd) {
  $('#menu-icon').removeClass(iconToRemove);
  $('#menu-icon').addClass(iconToAdd);
}

// Show the menu when the mobile menu button is clicked
$('nav').on('click', '#mobile-menu', function () {
  $('nav').addClass('nav-background');
  $('nav ul').slideToggle(function() {
    if ($(this).is(':visible')) {
      $('nav ul').css('display','flex');
      changeMobileMenuIcon('fa-bars', 'fa-times')
    } else {
      hideMobileMenu();
    }
  });
});

// Hide the menu when a link is clicked on the mobile menu
$('nav li a').on('click', function () {
  if($('#mobile-menu').is(":visible")) {
    $('nav ul').slideToggle(function() {
      hideMobileMenu();
    });
  }
});

// Show/hide the menu depending upon the screen size 
$(window).resize(function() {
  if ($(window).width() > 1024) {
    if(!$('nav ul').is(":visible")) {
      $('nav ul').show();
      changeMobileMenuIcon('fa-times', 'fa-bars')
    }
  } else {
    $('nav ul').hide();
    changeMobileMenuIcon('fa-times', 'fa-bars')
  }
});

// Smooth scrolling to sections of home page
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Modal from the Bourbon Refills framework: http://refills.bourbon.io/
$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});


// Initialize image carousels
$(document).ready(function() {
  $('.bio-carousel').slick(carouselSettings('bio'));
});

$(document).ready(function() {
  $('.portfolio-carousel').slick(carouselSettings('portfolio'));
});

function carouselSettings(carouselName) {
  return {
      centerMode: true,
      centerPadding: '100px',
      lazyLoad: 'ondemand',
      nextArrow: $('.next-' + carouselName),
      prevArrow: $('.prev-' + carouselName),
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '30px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
}