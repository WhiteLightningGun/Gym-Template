$(document).ready(function () {
  // Function to fade transition between images
  function fadeTransition(newImageSrc) {
    $("#galleryImg").fadeOut(600, function () {
      $(this).css("display", "none");
      $(this).attr("src", newImageSrc);
      $(this).fadeIn(600);
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
