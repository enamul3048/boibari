

let loginForm = document.querySelector('.loginform');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#closebtn').onclick = () =>{
    loginForm.classList.remove('active');
}



window.onscroll = () => {

  if (window.scrollY > 80) {
      document.querySelector('.header .header-2').classList.add('active');
  } else {
      document.querySelector('.header .header-2').classList.remove('active');
  }
}

window.onload = () => {
  
  if (window.scrollY > 80) {
      document.querySelector('.header .header-2').classList.add('active');
  } else {
      document.querySelector('.header .header-2').classList.remove('active');
  }
  fadeOut();
}

function loader() {
  document.querySelector('.load').classList.add('active');
}

function fadeOut() {
  const loaderElement = document.querySelector('.load');
  loaderElement.style.transition = 'opacity 2s'; 
  

  setTimeout(() => {
      loaderElement.style.display = 'none'; 
  }, 2000); 
}




var swiper = new Swiper(".books-slider", {
    loop:true,
    centerslide:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centerslide:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centerslide:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


