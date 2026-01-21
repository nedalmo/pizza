
let ulList = document.querySelector("nav ul");

    hamburger.onclick = function(){
    ulList.classList.toggle("active");
}

let slide  = document.querySelector(".slide-prj");
let items = document.querySelectorAll(".slide-prj .item");
let next = document.getElementById("next");
let prevus = document.getElementById("pre");
let bultes  = document.querySelector(".bultes")
let length = items.length;
let start  = 0;

    let uls  = document.createElement("ul");
    for(let i =1;i<=length;i++){
        let lis = document.createElement("li");
        uls.append(lis)
    };
    bultes.append(uls);
    let ulse = document.querySelectorAll(".bultes ul li");

    let setinver = setInterval(w=>{
        next.click()
    },3000)

function cheker(){
    remove()
    slide.style.left = -items[start].offsetLeft + "px";
    ulse[start].classList.add("active");
    clearInterval(setinver)
    setinver = setInterval(w=>{
        next.click()
    },2000)
}
cheker()

prevus.onclick = function(){
    if(start <= 0){
    start = 12;
    start--;
    cheker()
    }else{
    start--;
    cheker();
    }
}
next.onclick = function(){
    if(start >= 12){
        start = 0;
        start++;
        cheker()
    }else{
    start++;
    cheker();
    }
}
function remove(){
    ulse.forEach(e=>{
    e.classList.remove("active")
})
}
ulse.forEach((li,index)=>{
    li.addEventListener("click",(e,re)=>{
        start  =index;
        cheker()
    })
})

