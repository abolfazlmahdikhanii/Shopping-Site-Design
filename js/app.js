const menuBtn=document.querySelector('.menu-mobile-btn')
const menu=document.querySelector('.middle-m')
const menuIcon=document.querySelector('.menu-btn')
const btnBackorward=document.querySelector('.btn-backward-s')
const btnForward=document.querySelector('.btn-forward-s')
const productSlider=document.querySelector('.product-slider')

menuBtn.addEventListener('click',()=>{
menu.classList.toggle('active')
menuIcon.classList.toggle('active')
})

btnBackorward.addEventListener('click',()=>{
    productSlider.scrollLeft-=210
})
btnForward.addEventListener('click',()=>{
    productSlider.scrollLeft+=210
})



var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  
  breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween:10 ,
       
      },
      450: {
        slidesPerView:2,
        spaceBetween:12 ,
       
      },
      
      
      600: {
        slidesPerView:3,
        spaceBetween:10 ,
       
      },
      1000: {
        slidesPerView:3,
        spaceBetween:20 ,
       
      },
      
  },
  direction: getDirection(),
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  
});









function getDirection() {
var windowWidth = window.innerWidth;
var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';

return direction;
}