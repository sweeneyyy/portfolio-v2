$(document).ready(function(){
  //Nav mobile sidebar
  $('.sidenav').sidenav();
  //Nav dropdown menu
  $(".dropdown-trigger").dropdown({
    hover: true
  });

  //Nav dropdown links match
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
}); // end document ready