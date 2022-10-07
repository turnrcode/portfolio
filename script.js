 // Sticky Navbar
 $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
    }
});


// Smooth scrolling on the navbar links
// $(".navbar-nav a").on('click', function (event) {
//     if (this.hash !== "") {
//         event.preventDefault();
        
//         $('html, body').animate({
//             scrollTop: $(this.hash).offset().top - 45
//         }, 1500, 'easeInOutExpo');
        
//         if ($(this).parents('.navbar-nav').length) {
//             $('.navbar-nav .active').removeClass('active');
//             $(this).closest('a').addClass('active');
//         }
//     }
// });


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});


// Testimonials carousel
// $(".testimonial-carousel").owlCarousel({
//     autoplay: true,
//     smartSpeed: 1000,
//     loop: true,
//     center: true,
//     dots: false,
//     nav: true,
//     navText : [
//         '<i class="bi bi-chevron-left"></i>',
//         '<i class="bi bi-chevron-right"></i>'
//     ],
//     responsive: {
//         0:{
//             items:1
//         },
//         768:{
//             items:2
//         },
//         992:{
//             items:3
//         }
//     }
// });

// For the tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// function to download CV
// function download(file, text) {
//     // creating an invisible element
//     var elemennt = document.createElement('a');
//     elemennt.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
//     elemennt.setAttribute('download', file);

//     // the code above is the same as : <a href="path_of_file" download="file_name">

//     document.body.appendChild(element);

//     // onClick property
//     element.click();

//     document.body.removeChild(element);
// }

// // now to start file download

// document.getElementById("btn")
// .addEventListener("click", function(){
//     // generate download of CV
//     var text = document.getElementById("text").value;
//     var filename = "resume.txt";

//     download(filename, text);
// }, false);


// another cv download attempt

const download = document.getElementById('cv');

download.addEventListener('click', request);

function request() {
    window.location = 'resume.pdf';
}

// Testimonial swiper

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});