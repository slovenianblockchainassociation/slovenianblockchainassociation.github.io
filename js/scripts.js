$(function() {

  "use strict";

  /*===============================================
    Preloaders
  ===============================================*/
  $(window).on("load", function () {
    $("body").addClass("loaded");
  });

  // Preloader 1 //
  if ($("body").attr("data-preloader") === "1") {
    var loaderData1 = "<div class='preloader'><div><span class='spinner'></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData1;
  }

  // Preloader 2 //
  else if ($("body").attr("data-preloader") === "2") {
    var loaderData2 = "<div class='preloader'><div><span></span><span></span><span></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData2;
  }

  // Preloader 3 //
  else if ($("body").attr("data-preloader") === "3") {
    var loaderData3 = "<div class='preloader'><div><span></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData3;
  }

  // Preloader 4 //
  else if ($("body").attr("data-preloader") === "4") {
    var loaderData4 = "<div class='preloader'><div><span></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData4;
  }

  // Preloader 5 //
  else if ($("body").attr("data-preloader") === "5") {
    var loaderData5 = "<div class='preloader'><div><span></span><span></span><span></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData5;
  }

  // Preloader 6 //
  else if ($("body").attr("data-preloader") === "6") {
    var loaderData6 = "<div class='preloader'><div><span></span><span></span><span></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData6;
  }

  // Preloader 7 //
  else if ($("body").attr("data-preloader") === "7") {
    var loaderData7 = "<div class='preloader'><div><span></span><span></span><span></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData7;
  }

  // Preloader 8 //
  else if ($("body").attr("data-preloader") === "8") {
    var loaderData8 = "<div class='preloader'><div><span class='spinner-box'><span></span></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData8;
  }

  // Preloader 9 //
  else if ($("body").attr("data-preloader") === "9") {
    var loaderData9 = "<div class='preloader'><div><span></span><span></span><span></span><span></span><span></span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData9;
  }

  // Preloader 10 //
  else if ($("body").attr("data-preloader") === "10") {
    var loaderData10 = "<div class='preloader'><div><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></div></div>";
    document.getElementById("preloader").innerHTML=loaderData10;
  }


  /*===============================================
    Scroll Spy
  ===============================================*/
  $("body").scrollspy({
    target: ".nav",
    offset: 60
  });


  /*===============================================
    Shrink Navbar when starts scrolling
  ===============================================*/
  var navbar = $(".navbar");

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 30) {
      navbar.addClass("navbar-shrink");
    } else {
      navbar.removeClass("navbar-shrink");
    }
  });


  /*===============================================
    Toggle Menu
  ===============================================*/
  var nav = $(".nav");
  var toggleBtn = $(".toggle-btn");

  // Show Nav menu when Toggle button clicked //
  toggleBtn.on("click", function(e) {
    if (nav.hasClass("nav-show")) {
      nav.removeClass("nav-show");
    }
    else {
      nav.addClass("nav-show");
    }
    e.stopPropagation();
  });

  // Navicon transform into X //
  toggleBtn.on("click", function() {
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
    else {
      toggleBtn.addClass("toggle-close");
    }
  });

 // Close Toggle Nav menu //
  $(document).on("click", function() {
    if (nav.hasClass("nav-show")) {
      nav.removeClass("nav-show");
    }
    if (toggleBtn.hasClass("toggle-close")) {
      toggleBtn.removeClass("toggle-close");
    }
  });


  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");
  var smoothLinks = $(".nav li a, .home-middle-content a, .scroll-down-button");

  smoothLinks.on("click", function(e) {
    htmlBody.animate({scrollTop: $(this.hash).offset().top - 60}, 800, "easeInOutQuart");
    e.preventDefault();
  });


  /*===============================================
    Go to Top button
  ===============================================*/
  var goTopButton = ".go-top-button";

  // hide or show button
  $(window).on("scroll", function(){
    if ($(this).scrollTop() > 700) { // 700px from top
      $(goTopButton).addClass("go-top-button-visible");
    }
    else {
      $(goTopButton).removeClass("go-top-button-visible");
    }
  });

  // smooth scroll to top
  $(goTopButton).on("click", function(){
    htmlBody.animate({scrollTop : 0}, 800, "easeInOutQuart");
    return false;
  });


  /*===============================================
    Typed js
  ===============================================*/
  $(window).on("load", function () {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      startDelay: 100,
      typeSpeed: 30,
      backDelay: 1000,
      backSpeed: 20,
      loop: true,
      loopCount: 1
    });
  });


  /*===============================================
    Fun Facts Counter
  ===============================================*/
  $("#facts").appear(function() {

    var factsCounter = $(".facts-counter");

    factsCounter.each(function () {
      $(this).prop("Counter",0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: "swing",
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });

  },{accX: 0, accY: -10});


  /*===============================================
    Portfolio
  ===============================================*/
  $("#portfolio").imagesLoaded( function() {
    var $portfolioWrapper = $(".portfolioWrapper").isotope({
      itemSelector: ".portfolio-item",
      transitionDuration: 350
    });
    var filterButton = $(".portfolio-filter ul li");

    // Portfolio Filter //
    filterButton.on("click", function() {
      var filterValue = $(this).attr("data-filter");
      $portfolioWrapper.isotope({ filter: filterValue });

      filterButton.removeClass("active");
      $(this).addClass("active");
    });
  });


  /*===============================================
    Magnific Popup/Lightbox
  ===============================================*/
  $(".portfolio-hover").magnificPopup({
    type:"inline",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false
  });

  // ===== Youtube Lightbox ===== //
  var popupYoutube = $(".popup-youtube");
  var youtubeSrc = popupYoutube.attr("data-youtube-src");

  popupYoutube.magnificPopup({
    items: { src: youtubeSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          id: "v=",
          src: youtubeSrc
        }
      },
      srcAction: "iframe_src" // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });

  // ===== Vimeo Lightbox ===== //
  var popupVimeo = $(".popup-vimeo");
  var vimeoSrc = popupVimeo.attr("data-vimeo-src");

  popupVimeo.magnificPopup({
    items: { src: vimeoSrc },
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        vimeo: {
          index: "vimeo.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
          id: "/",
          src: vimeoSrc
        }
      },
      srcAction: "iframe_src" // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });


  /*===============================================
    Owl Carousel Sliders
  ===============================================*/
  // ===== Testimonial Slider ===== //
  $("#testimonialSlider").owlCarousel({
    items:1,
    rewind:true,
    margin:30,
    dots:true,
    dotsSpeed:300,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000, // 4 seconds
    autoplaySpeed:300 // 0.3 seconds
  });

  // ===== Clients Slider ===== //
  $("#clientsSlider").owlCarousel({
    margin:30,
    rewind:true,
    dots:false,
    dotsSpeed:300,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000,
    autoplaySpeed:300,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 576px up
      576 : {
        items: 2
      },
      // breakpoint from 768px up
      768 : {
        items: 3
      },
      // breakpoint from 992px up
      992 : {
        items: 4
      },
      // breakpoint from 1200px up
      1200 : {
        items: 5
      }
    }
  });


  /*===============================================
    Contact Form
  ===============================================*/
  $("#contactform").on("submit",function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    if (name === "") {
      $("#name").addClass("error-bg");
    }
    if (email === "") {
      $("#email").addClass("error-bg");
    }
    if (subject === "") {
      $("#subject").addClass("error-bg");
    }
    if (message === "") {
      $("#message").addClass("error-bg");
    }

    else {
      $.ajax({
        url:"contact-form.php",
        data:$(this).serialize(),
        type:"POST",
        success:function(data){
          $("#success").addClass("show-result"); //=== Show Success Message==
          $("#contactform").each(function(){
            this.reset();
          });
        },
        error:function(data){
          $("#error").addClass("show-result"); //===Show Error Message====
        }
      });
      var forms = $("#contactform input, #contactform textarea");
      forms.removeClass("error-bg");
    }

    e.preventDefault();
  });


  /*===============================================
    Google Maps
  ===============================================*/
  var markerIcon = "images/marker.png";
  // Map Initial Location
  var initLatitude = 46.046451; // <- Latitude here //
  var initLongitude = 14.504241; // <- Longitude here //

  var map = new GMaps({
    el: "#map-canvas",
    lat: initLatitude,
    lng: initLongitude,
    zoom: 13,
    scrollwheel: false
  });
  map.addMarker({
    lat : initLatitude,
    lng : initLongitude,
    icon: markerIcon
  });


});