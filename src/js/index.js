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
    autoplay: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
  });

  jQuery('.pricing-banner-slider').slick({
    autoplay: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
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

// Tabs Slider

const TabsSlider = jQuery('.tabs-slider').slick({
  // infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: '.previous-tab',
  nextArrow: '.next-tab',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// Service slider

const buttons = document.querySelectorAll('.portfolio-tab')
const section = document.querySelectorAll('.portfolio-filter')

buttons.forEach(item => {
  item.addEventListener('click', () => {
    buttons.forEach(item => {
      item.className = "";
      item.className = "portfolio-tab";
    });
    item.className = "active";
    // show images
    let values = item.textContent;
    section.forEach(show => {
        show.style.display = "none";
        if (show.getAttribute("data-id") === values) {
            show.style.display = "block";
        }
    })
  })
})

