/*Carousel*/
/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
$('.carousel').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
  });

/*Testimonial*/

$(document).ready(function () {
  var silder = $(".owl-carousel");
  silder.owlCarousel({
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  items: 1,
  stagePadding: 20,
  center: true,
  nav: false,
  margin: 50,
  dots: true,
  loop: true,
  responsive: {
  0: { items: 1 },
  480: { items: 2 },
  575: { items: 2 },
  768: { items: 2 },
  991: { items: 3 },
  1200: { items: 4 }
  }
  });
  });

    /* contact form */
   
    $(document).ready(function(){
        $('#birth-date').mask('00/00/0000');
        $('#phone-number').mask('0000-0000');
       })

/* Smooth scrolling */



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


/*wow animations*/

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // change this if you are not using animate.css
        offset:       0,          // default
        mobile:       true,       // keep it on mobile
        live:         true        // track if element updates
      }
    )
   wow.init();

   /*About us*/
   $(function(){
    $('a[title]').tooltip();
    });
   /* end about us*/