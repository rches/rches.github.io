$(document).ready(function() {
  $("#navControl").click(function() {
    $("#navigation")
      .toggleClass("show-nav")
      .toggleClass("hide-nav");

    $("#site-wrapper").toggleClass("hide-site");

    $("#navControl").toggleClass("change");
  });

  // $(".project-stuff").click(function() {
  //   $(this)
  //     .find(".deets")
  //     .toggle();
  // });
});
