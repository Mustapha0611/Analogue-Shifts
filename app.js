const { createApp } = Vue

createApp({
  data() {
    return {
   newsHeadline:[
    { title: "NEWS HEADLINE", description: "Lorem ipsum dolor sit amet", img:('/images/logo.jpg'),url:"https://analogueshifts.com/",id:1}, 
    { title: "NEWS HEADLINE", description: "Lorem ipsum dolor sit amet", img:('/images/logo.jpg'), url:"https://analogueshifts.com/", id:2},
    { title: "NEWS HEADLINE", description: "Lorem ipsum dolor sit amet", img:('/images/logo.jpg'), url:"https://analogueshifts.com/", id:3}   ]
    }
  }
}).mount('#app')