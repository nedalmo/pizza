let slider = document.querySelector(".slider-container .slide");
let items = document.querySelectorAll(".slider-container .slide .item");
let lengthImges = items.length
let bolites  =document.querySelector(".bolites")
let next  = document.getElementById("next");
let preveus  = document.getElementById("prev");
let start = 0;



// strart slider 
next.onclick = nextFunction;
preveus.onclick = preFunction;
function nextFunction(){
      if(start<=0){
        start=lengthImges;
        start--;
        shecker()
    }else{
        start--;
        shecker()
    }

}
function preFunction(){

     if(start>=lengthImges-1){
    start =-1;
    start++;
    shecker()
   }else{
    start++;
    shecker()
   }
}

let ul = document.createElement("ul");
ul.setAttribute("id","ul-plites");
for(let i=0;i<lengthImges;i++){
    let li = document.createElement("li");
    ul.appendChild(li)
}
bolites.appendChild(ul)
let plitesAll = document.querySelectorAll("#ul-plites li");
let uto = setInterval(_=>{next.click()},4000);
function shecker(){
    reomve()
    slider.style.left = -items[start].offsetLeft+ "px"
    plitesAll[start].classList.add("active");
    clearInterval(uto)
    uto = setInterval(_=>{next.click()},4000);
}
shecker()
function reomve(){
    plitesAll.forEach(li=>{
        li.classList.remove("active")
    })
}
plitesAll.forEach((li,index)=>{
    li.addEventListener("click",_=>{
        start= index;
        shecker();
    })

})

// End slider 







function openTabs(){
        cartTabs.classList.toggle("active");
    overly.classList.toggle("active");
    if(cartTabs.classList.contains("active") && overly.classList.contains("active")){
        document.body.style.overflowY = "hidden"
    }else{
        document.body.style.overflowY = "auto"
    }
}

iconNavCart.onclick = _=>{
openTabs()
}
overly.onclick = _=>{
    cartTabs.classList.remove("active");
    overly.classList.remove("active");
    if(cartTabs.classList.contains("active") && overly.classList.contains("active")){
        document.body.style.overflowY = "hidden"
    }else{
        document.body.style.overflowY = "auto"
    }
}