(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);




document.addEventListener('DOMContentLoaded', function() {
    // Array of all image paths
    const imagePaths = [
      'img/c1.png', 'img/c2.jpg', 'img/c3.jpg', 'img/c4.jpg', 'img/c5.jpg',
      'img/c6.jpg', 'img/c7.jpg', 'img/c8.png', 'img/c9.png', 'img/c10.jpg'
    ];
    
    const topTrack = document.getElementById('top-track');
    const bottomTrack = document.getElementById('bottom-track');
    
    // Function to create image elements
    function createImageElements(paths, trackElement) {
      // First add all original images
      paths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Gallery image';
        trackElement.appendChild(img);
      });
      
      // Then add duplicates for seamless looping
      paths.forEach(path => {
        const img = document.createElement('img');
        img.src = path;
        img.alt = 'Gallery image';
        trackElement.appendChild(img);
      });
    }
    
    // Add first 5 images to top row (scrolling right)
    createImageElements(imagePaths.slice(0, 5), topTrack);
    
    // Add last 5 images to bottom row (scrolling left)
    createImageElements(imagePaths.slice(5, 10), bottomTrack);
    
    // Preload images to prevent flickering
    imagePaths.forEach(path => {
      const img = new Image();
      img.src = path;
    });
  });


