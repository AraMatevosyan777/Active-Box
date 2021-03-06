$(function(){
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav")
    let navToggle = $("#navToggle")
    checkScroll(introH,scrollPos);
    
    $(window).on("scroll resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(introH,scrollPos);
    })

    function checkScroll(introH,scrollPos){
        if(scrollPos > introH){
            header.addClass("fixed")
        }else{
            header.removeClass("fixed")
        }
    }


    // smooth scroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementid = $(this).data('scroll');
        let elementOffset = $(elementid).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset -70
        },700);
    });


    // nav toggle
   
    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    })


    // reviews

    let slider = $("#reviewsSlider");
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
          
})