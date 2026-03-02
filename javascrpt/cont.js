


  const valuesSwiper = new Swiper('.valuesSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });

        const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
            },
        });





function statsNumber(){
    let stat1 = document.getElementById("stat1")
    let stat2 = document.getElementById("stat2")
    let stat3 = document.getElementById("stat3")
    let stat4 = document.getElementById("stat4")

 let intr =setInterval(()=>{
   let number =   +stat1.innerHTML+30;
   stat1.innerHTML = number 
  if(+stat1.innerHTML ===15420 ){
        clearInterval(intr)
      
    }
},10)


 let intr2 =setInterval(()=>{
   let number =   +stat2.innerHTML+10;
   stat2.innerHTML = number 
  if(+stat2.innerHTML ===8560 ){
        clearInterval(intr2)
      
    }
},1)

 let intr3 =setInterval(()=>{
   let number =   +stat3.innerHTML+1;
   stat3.innerHTML = number 
  if(+stat3.innerHTML ===24 ){
        clearInterval(intr3)
      
    }
},135)

 let intr4 =setInterval(()=>{
   let number =   +stat4.innerHTML+1;
   stat4.innerHTML = number 
  if(+stat4.innerHTML ===15 ){
        clearInterval(intr4)
      
    }
},135)

}
statsNumber()