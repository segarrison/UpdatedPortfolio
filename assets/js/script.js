// $("#workCarousel").carousel();

// // Enable Carousel Indicators
// $(".item").click(function () {
//   $("#workCarousel").carousel(1);
// });

// // Enable Carousel Controls
// $(".carousel-control-prev").click(function () {
//   $("#workCarousel").carousel("prev");
// });
$(document).ready(function () {
  // Activate Carousel
  $("#workCarousel").carousel("pause");

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#workCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#workCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#workCarousel").carousel(2);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#workCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    $("#workCarousel").carousel("next");
  });
});
