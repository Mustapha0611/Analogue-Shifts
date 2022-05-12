//   Menu Animation
  var burger = document.querySelector(".burger");
  var close = document.querySelector(".close")

  burger.addEventListener('click', () =>{
    anime({
      targets : '.nav',
      translateX:"100%",
      duration :300,
      easing:'linear'
    })
  })

  
  close.addEventListener('click', () =>{
    anime({
      targets : '.nav',
      translateX:"-100%",
      duration :300,
      easing:'linear'
    })
  })