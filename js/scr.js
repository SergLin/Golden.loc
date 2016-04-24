
  $(document).ready(function() {
    $("a.ancLinks").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top;
      $('html,body').animate( { scrollTop: destination }, 800 );
      return false;
    });
  });
