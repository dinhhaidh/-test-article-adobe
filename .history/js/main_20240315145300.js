$(document).ready(function () {
    $("#nav-toggle").click(function(){
      $("#nav-menu").addClass("show-menu");
    });
    $("#nav-close").click(function(){
      $("#nav-menu").removeClass("show-menu");
    });
    // $("#nav__link").click(function(){
    //   $('.active-link').removeClass("show-menu");
    // });

     // khi kích vào nav__link nó sẽ ẳn đi
  $('.nav__item a').click(function(){
    $("#nav-menu").removeClass("show-menu");
  });

  $(window).scroll(function(){
    $("#header").toggleClass("blur-header", $(this).scrollTop() >= 50);
    $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
  })
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
//     const scrollActive = () =>{
//       const scrollDown = window.scrollY

//       sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//                 sectionTop = current.offsetTop - 58,
//                 sectionId = current.getAttribute('id'),
//                 sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

//         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
//           sectionsClass.classList.add('active-link')
//         }else{
//           sectionsClass.classList.remove('active-link')
//         }                                                    
//       })
//     }
// window.addEventListener('scroll', scrollActive)




let swiperAbout = new Swiper('.about__swiper', {
  loop: true,
  spaceBetween: 62,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  breakpoints: {
      1150: {
          slidesPerView: 3,
          centeredSlides: false,
      },
  }
});



/*=============== swiperDigtal SWIPER slider ===============*/
var swiperDigtal = new Swiper(".digtal__swipper", {
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
})


/*=============== gsap ===============*/
gsap.from('.nav__menu', 0.8, {opacity: 0, x: -100, delay: .8})
gsap.from('.nav__actions', 0.8, {opacity: 0, x: 100, delay: .8})
gsap.from('.home__desc', 1.8, {opacity: 0, y: 150, delay: .1})
gsap.from('.home__data', 2.3, {opacity: 0, x: -100, delay: .8})
gsap.from('.home__img', 2.3, {opacity: 0, x: 100, delay: 1})
gsap.from('.about__data', 2.3, {opacity: 0, x: -100, delay: 1.8})
gsap.from('.about__image', 2.3, {opacity: 0, x: 100, delay: 1.8})
gsap.from('.blog__data', 2.3, {opacity: 0, y: 100, delay: 2.8})
gsap.from('.blog__image', 2.3, {opacity: 0, y: -100, delay: 2.8})


// 
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})
sr.reveal(`.home__data, .join__container, .footer__container`) //hiệu ứng trên xuống
sr.reveal(`.home__img`,{origin: 'bottom'})
sr.reveal(`.enjoy__card, .popular__card`,{interval: 100}) //hiệu ứng trêm xuống lần lần từng giây
sr.reveal(`.about__data`,{origin: 'right'})
sr.reveal(`.about__img`,{origin: 'left'})



