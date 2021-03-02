import "@fortawesome/fontawesome-free/js/all.js"
import "bootstrap/dist/css/bootstrap.min.css"
import 'slick-carousel/slick/slick.css'
import '../css/style.css'
import jQuery from "jquery"
import 'slick-carousel'
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css"
// import "@fancyapps/fancybox"
// import Macy from "macy"

// Banner Slider

jQuery('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });

  // Brand Slider

  jQuery('.logo-slide').slick({
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 1000,
    arrows: false,
  })

  jQuery('.service-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 1500,
  });
  // accordian 

const accordianHeaders = document.querySelectorAll('.accordian-header')
  
accordianHeaders.forEach((accordianHeader) => {
  accordianHeader.addEventListener('click', (event) => {
    const currentlyActiveAccordianHeader = document.querySelector(
      '.accordian-header.active',
    )
    if (
      currentlyActiveAccordianHeader &&
      currentlyActiveAccordianHeader !== accordianHeader
    ) {
      currentlyActiveAccordianHeader.classList.toggle('active')
      currentlyActiveAccordianHeader.nextElementSibling.style.maxHeight = 0
    }

    accordianHeader.classList.toggle('active')
    const accordianBody = accordianHeader.nextElementSibling
    if (accordianHeader.classList.contains('active')) {
      accordianBody.style.maxHeight = accordianBody.scrollHeight + 'px'
    } else {
      accordianBody.style.maxHeight = 0
    }
  })
})

// if(document.getElementById('macy-container')){
//   var macyInstance = new Macy({
//   container: '#macy-container',
//   trueOrder: false,
//   waitForImages: true,
//   useOwnImageLoader: false,
//   debug: true,
//   mobileFirst: true,
//   columns: 1,
//   margin: {
//     y: 16,
//     x: '2%',
//   },
//   breakAt: {
//     1200: 3,
//     940: 3,
//     520: 2,
//     400: 2,
//   },
//   // See below for all available options.
// })


// }
