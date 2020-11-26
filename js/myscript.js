//Active owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin : 70,
        items : 4,
        loop : true,
        autoplay : true,
        autoplayTimeout : 3000,
        animateOut : true,
        nav : true,
        navText : ["<i class='fas fa-long-arrow-alt-left owl-left-array'></i>","<i class='fas fa-long-arrow-alt-right owl-right-array'></i>"],
        responsiveClass:true,
        responsive:{ 
        0:{
            items:1,
            nav:false
        },
        400:{
            items:2,
            nav:true
        },
        800:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
        }
    }
    });
  });