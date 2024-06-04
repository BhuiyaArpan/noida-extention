
// service slider

$(".service-wrapper").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  //   vertical: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 442,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
});

// menubar

$(".navbar-toggler").click(function () {
  $(".navbar-collapse").toggleClass("menu-visible");
  $(".menu_overlay").toggleClass("menu-visible");
  $("body").css("overflow", "hidden");
});

$(".menu_close_btn").click(function () {
  $(".navbar-collapse").removeClass("menu-visible");
  $(".navbar-collapse").removeClass("show");
  $(".menu_overlay").removeClass("menu-visible");
  $("body").css("overflow", "auto");
});

$(".menu_overlay").click(function () {
  $(".menu_overlay").removeClass("menu-visible");
  $(".navbar-collapse").removeClass("show");
  $(".navbar-collapse").removeClass("menu-visible");
  $("body").css("overflow", "auto");
});

// toggle password

$(".toggle-password").click(function() {
  $(this).toggleClass("fa-eye fa-eye-slash");
  $(this).toggleClass("show");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
      input.attr("type", "text");
  } else {
      input.attr("type", "password");
  }
});
