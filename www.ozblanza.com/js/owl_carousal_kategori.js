// script.js
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 6,
      loop: true,
      margin: 6,
      nav: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      navText: [
        '<div class="owl-prev"><i class="las la-1x la-arrow-left"></i></div>',
        '<div class="owl-next"><i class="las la-1x la-arrow-right"></i></div>'
      ]
    });
  });
  