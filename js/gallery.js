$(document).ready(function () {
  // Function to fade transition between images
  function fadeTransition(newImageSrc) {
    $("#galleryImg").fadeOut(600, function () {
      $("#galleryImg").attr("src", newImageSrc).fadeIn(600);
    });
  }

  // Attach click event to each paragraph
  $("p[data-image]").click(function () {
    var newImageSrc = $(this).data("image");
    fadeTransition(newImageSrc);

    // Remove gallery-inactive class from the clicked element
    $(this).removeClass("gallery-inactive");

    // Add gallery-inactive class to all other elements
    $("p[data-image]").not(this).addClass("gallery-inactive");
  });
});
