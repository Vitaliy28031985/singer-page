document.addEventListener('DOMContentLoaded', () => {
   const header = document.querySelector(".header-page");
   const hero = document.querySelector(".wrapper");
   const logo = document.querySelector(".logo-js");

   window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY;
      let currentWidth = window.innerWidth;

     
      if (currentWidth >= 768)
      {
         if (scrollTop >= 70) {
            header.classList.add("scroll-header");
            logo.classList.remove("logo--color_photo");
            logo.classList.add("logo--color_photo--scroll");
            hero.style.marginTop = `${header.offsetHeight}px`;
          } else {
            header.classList.remove("scroll-header");
            logo.classList.add("logo--color_photo");
            logo.classList.remove("logo--color_photo--scroll");
        hero.style.marginTop = `0px`;    
      }
         
      } else {
   
         if (scrollTop >= 120) {
            header.classList.add("scroll-header");
            logo.classList.remove("logo--color_photo");
            logo.classList.add("logo--color_photo--scroll");
           hero.style.marginTop = `${header.offsetHeight}px`;
         } else {
            header.classList.remove("scroll-header");
            logo.classList.add("logo--color_photo");
            logo.classList.remove("logo--color_photo--scroll")
           hero.style.marginTop = `0px`;
         }
      }
     
   });
});