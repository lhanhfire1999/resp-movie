$(document).ready(() => {
  $('#hamburger-menu').click(() => {
    $('#hamburger-menu').toggleClass('active');
    $('#nav-menu').toggleClass('active');
  });

  const navText = [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ];

  // Setting owl  carousel
  $('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    // autoplay: true,
    // autoplayHoverPause: true,
  });

  $('#top-movies-slide').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    // autoplay: true,
    // autoplayHoverPause: true,
    responsive: {
      500: {
        items: 3,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });

  $('.movies-slide').owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    loop: true,
    margin: 16,
    navText: navText,
    // autoplay: true,
    // autoplayHoverPause: true,
    responsive: {
      500: {
        items: 3,
      },
      1280: {
        items: 4,
      },
      1600: {
        items: 6,
      },
    },
  });
});
