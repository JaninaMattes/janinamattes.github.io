var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var numCards = $(".carousel-item").length;
  var scrollPosition = 0;

  function updateControlOpacity() {
    var maxScrollPosition = (numCards - 4) * cardWidth; // Adjust the number of cards shown
    if (scrollPosition === 0) {
      $(".carousel-control-prev").css("opacity", "0.5");
      $(".carousel-control-next").css("opacity", "1");
    } else if (scrollPosition === maxScrollPosition) {
      $(".carousel-control-prev").css("opacity", "1");
      $(".carousel-control-next").css("opacity", "0.5");
    } else {
      $(".carousel-control-prev, .carousel-control-next").css("opacity", "1");
    }
  }

  // inital opacity 
  updateControlOpacity();

  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < (numCards - 4) * cardWidth) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 600, function () {
        updateControlOpacity();
      });
    }
  });

  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 600, function () {
        updateControlOpacity();
      });
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
