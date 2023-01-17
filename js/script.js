// change nav style on scroll
window.addEventListener('scroll',()=> {
  document.querySelector('nav')
    .classList.toggle('window-scrolled', window.scrollY > 0 )
})

// contact buttons (circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(button => {
  let text = button.querySelector('p');
  text.innerHTML = text.innerHTML.split('').map((c,index) => {
    return `<span style="transform: rotate(${index * 13}deg)"> ${c}</span>`;
  }).join('')
})

// place the year dynamically
document.querySelectorAll("#year").forEach(eachSpan => {
  eachSpan.innerHTML = new Date().getFullYear()
})

// swiper js for gallery
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {

    599:{
      slidesPerView: 2,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 60
    }

  }
});

// close or open navigation menu
const nav = document.querySelector(".nav__link");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");

openNavBtn.addEventListener("click", function(e){
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

closeNavBtn.addEventListener("click", function(e){
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
})

nav.querySelectorAll("li a").forEach(navlink => {
  navlink.addEventListener("click", function(e){

    if( screen.width < 1024){
      nav.style.display = "none";
      openNavBtn.style.display = "inline-block";
      closeNavBtn.style.display = "none";
    }
  })
})

