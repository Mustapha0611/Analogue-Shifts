//   Menu Animation
var burger = document.querySelector(".burg");
var close = document.querySelector(".close");

burger.addEventListener("click", () => {
  anime({
    targets: "nav",
    translateX: "100%",
    duration: 300,
    easing: "linear",
  });
});

close.addEventListener("click", () => {
  anime({
    targets: "nav",
    translateX: "-100%",
    duration: 300,
    easing: "linear",
  });
});



//Swiper js

var splide = new Splide( '.splide', {
  perPage:2,
  width: '90rem',
  breakpoints: {
    800: {
      perPage: 1,
      padding:'5rem'
    },
  },
}
  
);

splide.mount();