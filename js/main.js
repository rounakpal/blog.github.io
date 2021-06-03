const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}








    // owl-crousole for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
      
        
    });


    // click to srcoll down
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },3000);
    })
   //aos Instance
   AOS.init();    

