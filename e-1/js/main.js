var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
        }


        $('.slider-0').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay:true,
            autoplayTimeout:5000,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })
     
        


        $('.SpecialOffers').owlCarousel({
            loop:true,
            margin:5,
            autoplay:true,
            autoplayTimeout:5100,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })


        $('.Best-sell-product').owlCarousel({
            loop:true,
            margin:5,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        })


        $('.slide-1').owlCarousel({
            loop:true,
            margin:5,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })

        $('.slide-2').owlCarousel({
            loop:true,
            margin:5,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })


        $('.slide-3').owlCarousel({
            loop:true,
            margin:5,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })

        $('.slide-4').owlCarousel({
            loop:true,
            margin:5,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })

        $('.slide-5').owlCarousel({
            loop:true,
            margin:5,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })

        $('.regular-product').owlCarousel({
            loop:true,
            margin:5,
            autoplay:false,
            dots:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        })


        $('.slide-brands').owlCarousel({
            loop:true,
            margin:2,
            autoplay:true,
            autoplayTimeout:5700,
            dots:false,
            responsive:{
                0:{
                    items:4
                },
                600:{
                    items:6
                },
                1000:{
                    items:6
                }
            }
        })



        $('.Best-Seller').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:5800,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });




        $('.up-scool i').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });





function openjs() {
    document.querySelector(".navber").style.left="0";
}
function closejs() {
    document.querySelector(".navber").style.left="-300px";
}





    // AOS Instance
    AOS.init();


