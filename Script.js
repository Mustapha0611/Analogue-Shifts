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

//Vue widget
const app = createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')