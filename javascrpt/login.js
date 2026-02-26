

function showPage(){



let auth_tabs  = document.querySelectorAll(".auth-tabs button");
let loginForm = document.getElementById("loginForm");
let registerForm = document.getElementById("registerForm");
auth_tabs.forEach(tab=>{
    tab.addEventListener("click",e=>{
        auth_tabs.forEach(ac=>{
            ac.classList.remove("active")
        })
        e.target.classList.add("active");
        if(e.target === auth_tabs[0]){
            registerForm.classList.remove("active")
        loginForm.classList.add("active")
        }else{
            loginForm.classList.remove("active")
            registerForm.classList.add("active")
        }

    })
})
}
showPage()
function checkSignIn(){

let check_mesage = document.querySelector(".check_mesage")
let new_account_but = document.getElementById("new_account_but");

let first_name = document.getElementById("first_name");
let last_name =document.getElementById("last_name");
let Email_field = document.getElementById("Email_field");
let phone_field= document.getElementById("phone_field");
let password_field = document.getElementById("password_field");
let password_identical = document.getElementById("confirm_password");
let checkbox = document.getElementById("checkbox");


let arr = JSON.parse(localStorage.getItem("data")) || [];


new_account_but.onclick = function(){
    
    let reg = /[a-z0-9._%+\-]{4,9}@[a-z0-9.\-]+\.[a-z]{2,}$/g.test(Email_field.value);
    let reg_phone = /01(0|2|5|1)\d{8}$/g.test(phone_field.value);
    if(first_name.value===""){
        check_mesage.innerHTML = " ادخل الاسم الاول من فضلك"
        check_mesage.classList.add("active");
        setTimeout(() => check_mesage.classList.remove("active"), 2500);
        first_name.focus()
    }    

   else if(last_name.value===""){
        check_mesage.innerHTML = " ادخل الاسم الثاني من فضلك"
        check_mesage.classList.add("active");
             setTimeout(() => check_mesage.classList.remove("active"), 2500);

        last_name.focus()
    }    
   else if(Email_field.value===""){
        check_mesage.innerHTML = " ادخل  الايميل  "
        check_mesage.classList.add("active");
             setTimeout(() => check_mesage.classList.remove("active"), 2500);

        Email_field.focus()
    }    
   else if(reg == false){
        check_mesage.innerHTML = "   هذا الايميل غير صالح "
        check_mesage.classList.add("active");
              setTimeout(() => check_mesage.classList.remove("active"), 2500);

        Email_field.focus()
    }    
   else if(phone_field.value===""){
        check_mesage.innerHTML = "   ادخل رقم الهاتف  "
        check_mesage.classList.add("active");
               setTimeout(() => check_mesage.classList.remove("active"), 2500);

        phone_field.focus()
    }    
   else if(reg_phone == false){
        check_mesage.innerHTML = "   هذا الرقم غير صالح "
        check_mesage.classList.add("active");
              setTimeout(() => check_mesage.classList.remove("active"), 2500);

        phone_field.focus()
    }    
       else if(password_field.value===""){
        check_mesage.innerHTML = "   ادخل  كلمه السر  "
        check_mesage.classList.add("active");
               setTimeout(() => check_mesage.classList.remove("active"), 2500);

        password_field.focus()
    } 
       else if(password_identical.value===""){
        check_mesage.innerHTML = "   تأكيد كلمة السر "
        check_mesage.classList.add("active");
        setInterval(() => {
        check_mesage.classList.remove("active");

        }, 3000);
        password_identical.focus()
    } 
    else if(password_field.value !==password_identical.value){
            check_mesage.innerHTML = "    كلمة السر وتأكيدها غير متطابقين"
        check_mesage.classList.add("active");
              setTimeout(() => check_mesage.classList.remove("active"), 2500);

        password_identical.focus()
    }
    else if(checkbox.checked === false){
                check_mesage.innerHTML = "  يجب الموافقه علي الشروط والاحكام "
        check_mesage.classList.add("active");
        setInterval(() => {
        check_mesage.classList.remove("active");

        }, 2500);
    }else{
        arr.push({
            
            f_name:`${first_name.value}`,
            l_name:`${last_name.value}`,
            email:`${Email_field.value}`,
            phone:`${phone_field.value}`,
            pass:`${password_field.value}`,
        })
        localStorage.setItem("data",JSON.stringify(arr));
        document.querySelector(".sacsses").classList.add("active")

        setTimeout(() =>window.location.reload(), 1500);
    }

}


}
checkSignIn()




function genrateRandomNumber(max,man){
    return Math.floor(Math.random()*(max-man)+man)
}

function statsData(){



let stats = [
    {
        icon:"fas fa-pizza-slice",
        numbers:genrateRandomNumber(300,390),
        title:  "بيتزا مباعة اليوم",
        decrement:genrateRandomNumber(5,30)
    },
    {
        icon:"fas fa-users",
        numbers:genrateRandomNumber(300,390),
        title:" زوار جدد اليوم",
        decrement:genrateRandomNumber(5,30)

    },
    {
        icon:"fas fa-clock",
        numbers:genrateRandomNumber(30,40),
        title:" متوسط وقت التوصيل",
        decrement:genrateRandomNumber(5,30)

    },
    {
        icon:"fas fa-star",
        numbers:+(Math.random()*(5-4) +4).toFixed(1) ,
        title:"تقييم اليوم ",
        decrement:genrateRandomNumber(5,30)

    },
]

let statsGrid= document.getElementById("statsGrid");

stats.forEach((e,ind)=>{
    let iconeDecrement = e.decrement <=10 ? 'fas fa-arrow-down': 'fas fa-arrow-up' ;
    let colorDecrement= e.decrement <=10 ?  '#f44336' :'#4caf50';

    statsGrid.innerHTML += `
          <div class="stat-card">
            <div class="stat-icon">
                <i class="${stats[ind].icon}"></i>
            </div>
            <div " class="stat-value">${stats[ind].numbers >= 30 && stats[ind].numbers<=40 ? stats[ind].numbers +  " دقيقه ":stats[ind].numbers}</div>
            <div class="stat-label"> ${stats[ind].title}</div>
            <div class="stat-trend" style="color: ${colorDecrement}">
                <i class="${iconeDecrement}"></i> 
                ${stats[ind].decrement} % عن الأمس
            </div>
        </div>
    `
})

}
statsData()

function timeUpdate(){
    let updateTime = document.querySelector("#updateTime span")
    let nowTime = new Date();
    let fullTime = nowTime.toLocaleTimeString("ar-EG",{
        hour:"numeric",
        minute:"numeric",
        second:"numeric",
        hour12:true
    });
    updateTime.innerHTML = `آخر تحديث:`+ fullTime 
}
timeUpdate()
























