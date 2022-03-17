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

        $('#smartwizard').smartWizard({
        selected: 0,
        theme: 'arrows',
        autoAdjustHeight:true,
        transitionEffect:'fade',
        showStepURLhash: false,
        
        });
        
        });

