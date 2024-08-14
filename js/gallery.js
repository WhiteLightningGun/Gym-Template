$(document).ready(function () {
  // Function to fade transition between images
  function fadeTransition(newImageSrc) {
    $("#galleryImg").fadeOut(500, function () {
      $(this).css("visibility", "hidden");
      $(this).attr("src", newImageSrc);
      $(this).css("visibility", "hidden");
      $(this).css("visibility", "visible");
      $(this).fadeIn(500);
    });
  }

  // Attach click event to paragraph
  $("p[data-image]").click(function () {
    var newImageSrc = $(this).data("image");
    fadeTransition(newImageSrc);

    // Remove gallery-inactive class from clicked element
    $(this).removeClass("gallery-inactive");

    // Add gallery-inactive class to all other elements
    $("p[data-image]").not(this).addClass("gallery-inactive");
  });
});
