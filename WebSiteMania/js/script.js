// Script for logo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.width = "100px";

  } else {
    document.getElementById("logo").style.width = "150px";
  }
}

// /--------------------------
//         Banner Slider
//     ----------------------------/
    // $(".banner__slider").owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     items: 1,
    //     dots: true,
    //     smartSpeed: 1200,
    //     autoHeight: false, 
    //     autoplay: true
    // });

    // /--------------------------
    //     Banner Slider Picture
    // ----------------------------/

    // document.addEventListener("DOMContentLoaded", function(event) {
    //     var currentIndex = 0;
    //     var banners = document.getElementsByClassName("slider-item");

    //     function showBanner(index) {
    //       for (var i = 0; i < banners.length; i++) {
    //         banners[i].style.display = "none";
    //       }
    //       banners[index].style.display = "block";
    //     }

    //     function nextBanner() {
    //       currentIndex++;
    //       if (currentIndex >= banners.length) {
    //         currentIndex = 0;
    //       }
    //       showBanner(currentIndex);
    //     }

    //     // setInterval(nextBanner, 5000); // Смена баннера каждые 3 секунды

    //     showBanner(currentIndex);
    //   });

//Script for burger-menu
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
  bar.addEventListener('click', ()=>{
    nav.classList.add('active')
  })
  
}
if (close) {
  close.addEventListener('click', ()=>{
    nav.classList.remove('active')
  })
}
// bar.addEventListener('toggle', ()=>{
//   nav.classList.add('active')
// })