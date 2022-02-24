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
    autoplay: true,
    autoplayHoverPause: true,
  });

  $('#top-movies-slide').owlCarousel({
    items: 6,
    dots: false,
    loop: true,
    autoPlay: false,
    autoplayHoverPause: true,
  });
});
