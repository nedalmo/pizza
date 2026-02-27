let myproducts = "/pizza/data.json";

 ulList = document.querySelector("nav ul");
let iconNavCart = document.querySelector(" header .container .cart-icon i");
let cartTabs = document.querySelector(" .cart-tab");
let overly  =document.querySelector(".cart-overly");
let closeCart = document.querySelector(".close-btuuon");
let productIncart = document.querySelector(".cart-tab .products .Main-element");
let  cartTabProducts  = document.querySelector(" .cart-tab .products");
let  samaryDetails = document.querySelector(" .cart-tab .samary-details-elemnt");
let samaryPrice = document.querySelector(".samary-price .part-price .count-price");
let priceCarte = document.querySelector(" .cartElement .price-carte");
let emptyCart = document.getElementById("emptyCart")
let btnBrowse = document.getElementById("btnBrowse")
let body_of_cart = document.querySelector(".Main_element");
let  buttons_two  = document.querySelector(".buttons-action .follow_showpping");
let add_product   =document.querySelector(".add_product")
let add_product_name_product   =document.querySelector(".add_product .name_product");
let conections = document.querySelector(".conections");
let total_price_of_cart  = document.querySelector(".total_price_of_cart");
let Checkout = document.querySelector(".Checkout");
let Place_Order = document.querySelector(".Place_Order");
let close_chekout_page = document.querySelector(".close_chekout_page");
let retrev_page = document.querySelector(".retrev_page");
let details_order = document.querySelector(".ALL_product_details_chechout");
let headerIcone = document.querySelector(".cart-tab .header-cart button i");
let cart_badge = document.querySelector(".cart-badge");
let backToCart = document.getElementById("backToCart");
let addressInput = document.getElementById("address");
let confirmOrder = document.getElementById("confirmOrder");
let phoneInput = document.getElementById("phone");
let addressText = document.getElementById("address_text");
let phoneText = document.getElementById("phone_text");
let change_address = document.getElementById("change_address");
let change_phone = document.getElementById("change_phone");
let checkbox = document.querySelector(".withdoem input[type='checkbox']");
let nav_links = document.querySelectorAll("nav ul li a");

nav_links.forEach(link => {
  if(link.href === window.location.href){
    link.classList.add("active");
  }else{
    link.classList.remove("active");
    }
})






headerIcone.addEventListener("click",e=>{
    openTabs()
})
 nav = document.querySelector("nav")

close_chekout_page.addEventListener("click",e=>{
    Checkout.classList.remove("active")
})
backToCart.addEventListener("click",e=>{
    Checkout.classList.remove("active")
})
retrev_page.addEventListener("click",e=>{
    Checkout.classList.remove("active")
})
Place_Order.onclick = function(){
    Checkout.classList.add("active")
}


// end body of cart 

samaryDetails.style.display = "none"
buttons_two.addEventListener("click",openTabs)
btnBrowse.addEventListener("click",e=>{
    openTabs()
    window.location = "/pizza/html-file/product.html"
});



function openTabs(){
        cartTabs.classList.toggle("active");
 
    overly.classList.toggle("active");
    if(cartTabs.classList.contains("active") && overly.classList.contains("active")){
        document.body.style.overflowY = "hidden"
    }else{
        document.body.style.overflowY = "auto"
    }
}
closeCart.addEventListener("click",e=>{
openTabs()
})
closeCart.addEventListener("click",e=>{
openTabs()
})
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

let unmberOfProduct = 0;



let cartIcon = document.querySelector(".cart-icon")
if (document.querySelector(".productAll .container")) {
    let requestOne = new XMLHttpRequest();
    requestOne.open("GET", myproducts);
    requestOne.send()
    requestOne.onload = _ => {
        if (requestOne.readyState === 4 && requestOne.status === 200) {
            let myData = JSON.parse(requestOne.responseText)
            createElement(myData);
            // searchFunction(myData);
        }
    }
}
fetch(myproducts)
  .then(response => {

    return response.json();
  })
  .then(myData => {
    // createElement(myData);
    searchFunction(myData);
  })
  .catch(error => {
    console.error(error);
  });

function searchFunction(object) {
let input_reslultes = document.querySelector(".search-wrapper .form input[type='search']");
let resultes = document.querySelector(".search-wrapper .results_search");

    input_reslultes.addEventListener("input", e => {
        resultes.style.display = "block";
        // Clear previous results
        resultes.innerHTML = '';
        
        if (input_reslultes.value.trim() !== "") {
                    resultes.style.display = "block";

            let arr = object.map(el => el.name);
            
            let filteredResults = arr.filter(name => 
                name.toLowerCase().includes(input_reslultes.value.toLowerCase())
            );
            filteredResults.forEach((result, index) => {
                let resultElement = document.createElement("div");
                resultElement.textContent = result;
                resultElement.classList.add('search-result-item'); // Optional styling
                resultes.appendChild(resultElement);
                // noResultsElement.innerHTML = '';
            
            });
              let noResultsElement = document.createElement("div");
                    noResultsElement.className = 'no-results'; // Optional styling
                    noResultsElement.textContent = 'لا يوجد نتائج للبحث';
                    resultes.appendChild(noResultsElement);
        }
        else{
                  
                    resultes.style.display = "none";

        }
    });
}


function createElement(myData) {
    let mainDivs = document.querySelector(".productAll .container");
    let div = document.createElement("div");
    div.className = "itemspro";
    myData.forEach((e,ind) => {
        let box = document.createElement("div");
        box.className = "box";
 
        let img = document.createElement("img");
        img.src = e["images"][0];
        let h3 = document.createElement("h3");
        h3.append(e["name"]);

        let butome = document.createElement("div");
        butome.className = "buttons";

        let price = document.createElement("span");
        let stringPrice = document.createElement("bold");
        stringPrice.append("جنيه")
        price.append(e["price"],stringPrice);
        let cart = document.createElement("button");
        let cartIcone  = document.createElement("i");
        cartIcone.className = "fas fa-cart-plus fa-flip-horizontal";
        let cartText = document.createTextNode(`اضف للسله`  )
        let cartele = document.createElement("hbl");
        cartele.append(cartText)
        cart.append( cartele,cartIcone)
        cart.addEventListener("click", ew => {
            ew.stopPropagation();
            addToCart(e);
        })
        box.addEventListener("click", er => {
            localStorage.setItem("id", e.id)
            window.location = "/pizza/html-file/details.html";
        })
        butome.append(cart, price)
        box.append(img, h3, butome);
        div.append(box);
        mainDivs.append(div)
    })



    

let text = "طعم البيتزا الأصلي… زي ما بتحبه بطعم إيطالي أصيل ";
   let i = 0;
    let speed = 200;
    let isDeleting = false;

    function typeEffect() {
      let element = document.getElementById("head_para_main");

      if (!isDeleting) {
        // كتابة
        element.innerHTML = text.slice(0, i + 1);
        i++;

        if (i === text.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 3000);
        }

      } else {
        // مسح
        element.innerHTML = text.slice(0, i - 1);
        i--;

        if (i === 0) {
          isDeleting = false;
        }
      }

      setTimeout(typeEffect, isDeleting ? 60 : speed);
    }

    typeEffect();
}




let cartBadge = document.querySelector(".cart-badge"); 

function updateCartCount() {
    if (!cartBadge) {
        cartBadge = document.querySelector(".cart-badge"); 
        if (!cartBadge) return;
    }
    
    const totalItems = cars.reduce((total, item) => total + item.qwn, 0);
    
    cartBadge.innerHTML = totalItems;
    
    localStorage.setItem("cartCount", totalItems);
}

let cars = JSON.parse(localStorage.getItem("car")) || [];

window.onload = function () {
    cars.forEach(item => {
        drawItem(item);
        emptyCart.style.display = "none";
        samaryDetails.style.display = "block";
        body_of_cart.style.overflowY = "scroll";
    });
    renderCheckout();
    
    const savedCount = localStorage.getItem("cartCount");
    if (savedCount && cartBadge) {
        cartBadge.innerHTML = savedCount;
    } else {
        updateCartCount(); 
    }
};

function renderCheckout() {
    if(!details_order){
        return;
    } 
    details_order.innerHTML = "";
    cars.forEach(item => {
        Checkout_function(item);
    });
}

function message_Add_product(cart){
    setTimeout(e=>{
        add_product.classList.add("active");
        add_product_name_product.innerHTML = cart.name;
    },0);
    setTimeout(e=>{
        add_product.classList.remove("active");
    },3000);
}

function addToCart(cart){
    message_Add_product(cart);

    emptyCart.style.display = "none";
    samaryDetails.style.display = "block";
    body_of_cart.style.overflowY = "scroll";

    let reosse = cars.find(item => {  
        return item.id == cart.id;
    });

    if(reosse){
        reosse.qwn++;
        document.getElementById(reosse.id).innerHTML = reosse.qwn;
        document.querySelector(`.prices[data-pre="${reosse.id}"]`).innerHTML = (reosse.price * reosse.qwn) + " جنيه";
    } else {
        let newCart = {
            ...cart,
            qwn: cart.qwn || 1
        };
        cars.push(newCart);
        drawItem(newCart);
    }

    localStorage.setItem("car", JSON.stringify(cars));
    
    samaryPrice.innerHTML = calcTotalPrice();
    updateCartCount(); // تحديث عدد المنتجات
    renderCheckout();
}

function drawItem(cart) {
    let box = document.createElement("div");
    box.className = "box";
    
    let imge_And_name = document.createElement("div");
    imge_And_name.className = "imge_And_name";
      
    let imge = document.createElement("img");
    imge.src = cart.images[0];

    let name = document.createElement("div");
    name.className = "name";
    name.append(cart.name);
    
    imge_And_name.append(imge, name);

    let increment_And_decrement = document.createElement("div");
    increment_And_decrement.className = "increment_And_decrement";

    let increment = document.createElement("div");
    increment.className = "increment";
    increment.append("+");

    let decrement = document.createElement("div");
    decrement.className = "decrement";
    decrement.append("-");
    
    let counte = document.createElement("div");
    counte.className = "count";
    counte.id = cart.id;
    counte.innerHTML = cart.qwn;

    let price = document.createElement("div");
    price.className = "prices";
    price.dataset.pre = cart.id;
    price.append((cart.price * cart.qwn) + "جنيه");
    
    increment.addEventListener("click", e => {
        cart.qwn++;
        counte.innerHTML = cart.qwn;
        price.innerHTML = (cart.price * cart.qwn) + "جنيه";
        
        localStorage.setItem("car", JSON.stringify(cars));
        
        samaryPrice.innerHTML = calcTotalPrice();
        updateCartCount(); 
        renderCheckout();
    });
    
    decrement.addEventListener("click", e => {
        cart.qwn--;
        if(cart.qwn <= 0){
            removeItem(cart.id);
            samaryPrice.innerHTML = calcTotalPrice();
        } else {
            counte.innerHTML = cart.qwn;
            price.innerHTML = (cart.price * cart.qwn) + "جنيه";
            
            localStorage.setItem("car", JSON.stringify(cars));  
            
            samaryPrice.innerHTML = calcTotalPrice();
            updateCartCount();   
        }
        renderCheckout();
    });

    let remove = document.createElement("div");
    remove.className = "remove";
    let icon_remove = document.createElement("i");
    icon_remove.className = "fa-solid fa-trash";
    remove.append(icon_remove);

    remove.onclick = function () {
        removeItem(cart.id);
    };
    
    increment_And_decrement.append(increment, counte, decrement);
    box.append(imge_And_name, increment_And_decrement, price, remove);
    body_of_cart.append(box);
    samaryPrice.innerHTML = calcTotalPrice();
    updateCartCount();  
}

function removeItem(id) {
    cars = cars.filter(item => item.id != id);
    
    const boxToRemove = document.getElementById(id)?.closest(".box");
    if (boxToRemove) {
        boxToRemove.remove();
    }
    
    localStorage.setItem("car", JSON.stringify(cars));
    
    samaryPrice.innerHTML = calcTotalPrice();

    if (body_of_cart.children.length === 0) {
        samaryDetails.style.display = "none";
        emptyCart.style.display = "block";
        body_of_cart.style.overflowY = "hidden";
        samaryPrice.innerHTML = "0 جنيه";
        total_price_of_cart.innerHTML = "0 جنيه";
    }
    
    const textDetailsToRemove = document.querySelector(".quntity")?.closest(".text_detalis_order");
    if (textDetailsToRemove) {
        textDetailsToRemove.remove();
    }
    
    updateCartCount(); // تحديث عدد المنتجات
    renderCheckout();
}

function calcTotalPrice() {
    let total = 0;
    cars.forEach(item => {
        total += item.price * item.qwn;
    });
    
    // التحقق من وجود عنصر conections
    const connectionsValue = conections?.innerHTML ? parseInt(conections.innerHTML) : 0;
    total_price_of_cart.innerHTML = total + connectionsValue;
    
    return total;
}

function Checkout_function(cart) {
    // إنشاء العنصر الرئيسي
    const textDetailsOrder = document.createElement('div');
    textDetailsOrder.className = 'text_detalis_order';

    // إنشاء div.text_info
    const textInfo = document.createElement('div');
    textInfo.className = 'text_info';

    // إنشاء العناصر الداخلية
    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = cart.name;

    const sizeDiv = document.createElement('div');
    sizeDiv.className = 'size';
    sizeDiv.innerHTML = 'الحجم : <span class="size_main">كبير</span>';

    const quantityDiv = document.createElement('div');
    quantityDiv.className = 'quntity';
    quantityDiv.innerHTML = `الكميه : <div class="quntity_main">${cart.qwn}</div>`;

    // إضافة العناصر إلى textInfo
    textInfo.appendChild(nameDiv);
    textInfo.appendChild(sizeDiv);
    textInfo.appendChild(quantityDiv);

    // إنشاء div.price_details_order
    const priceDetailsOrder = document.createElement('div');
    priceDetailsOrder.className = 'price_details_order';

    const priceDiv = document.createElement('div');
    priceDiv.className = 'price';
    priceDiv.textContent = cart.price * cart.qwn;

    const currencyDiv = document.createElement('div');
    currencyDiv.textContent = 'جنيه';

    // إضافة العناصر إلى priceDetailsOrder
    priceDetailsOrder.appendChild(priceDiv);
    priceDetailsOrder.appendChild(currencyDiv);

    // إضافة العناصر إلى العنصر الرئيسي
    textDetailsOrder.appendChild(textInfo);
    textDetailsOrder.appendChild(priceDetailsOrder);
    details_order.append(textDetailsOrder);
}





// end code cart   
if (document.querySelector(".detailselemnt")) {


    let requestOne = new XMLHttpRequest();
    requestOne.open("GET", myproducts);
    requestOne.send()
    requestOne.onload = _ => {
        if (requestOne.readyState === 4 && requestOne.status === 200) {
            let myData = JSON.parse(requestOne.responseText)
            myData.find(e => {
                if (e.id == localStorage.getItem("id")) {
                    createDetails(e)
                    elel(e)
                }
            })
        }
    }
}





function createDetails(e) {
    // إنشاء العنصر الرئيسي
    const detailsElement = document.querySelector('.detailselemnt');
    detailsElement.className = 'detailselemnt';

    // إنشاء الحاوية
    const container = document.createElement('div');
    container.className = 'container';

    // قسم اسم المنتج
    const nameProductDiv = document.createElement('div');
    nameProductDiv.className = 'name-product';
    const productName = document.createElement('div');
    productName.textContent = `${e.name}`;
    nameProductDiv.appendChild(productName);

    // القسم الرئيسي للتفاصيل
    const mainDetailsDiv = document.createElement('div');
    mainDetailsDiv.className = 'main-details';

    // قسم الصور
    const imagesDetailsDiv = document.createElement('div');
    imagesDetailsDiv.className = 'imges-detels';

    // الصورة الرئيسية
    const mainImagesDiv = document.createElement('div');
    mainImagesDiv.className = 'main-imges';
    const mainImg = document.createElement('img');
    mainImg.src = `${e.images[0]}`;
    mainImg.alt = '';
    mainImagesDiv.appendChild(mainImg);

    // الصور الفرعية
    const lastImagesDiv = document.createElement('div');
    lastImagesDiv.className = 'last-imges';

    const img1 = document.createElement('img');
    img1.className = 'actives';
    img1.src = `${e.images[0]}`;
    img1.alt = '';

    const img2 = document.createElement('img');
    img2.src = `${e.images[1]}`;
    img2.alt = '';

    const img3 = document.createElement('img');
    img3.src = `${e.images[2]}`;
    img3.alt = '';

    lastImagesDiv.appendChild(img1);
    lastImagesDiv.appendChild(img2);
    lastImagesDiv.appendChild(img3);

    imagesDetailsDiv.appendChild(mainImagesDiv);
    imagesDetailsDiv.appendChild(lastImagesDiv);

    // قسم الوصف
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'descirption';

    // العنوان
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    titleDiv.textContent = `${e.quickDescription}`;

    // الأسعار
    const pricesDiv = document.createElement('div');
    pricesDiv.className = 'prices';

    const priceLabel = document.createElement('span');
    priceLabel.textContent = ' السعر ';

    const priceColon = document.createTextNode(' : ');

    const numberPriceSpan = document.createElement('span');
    numberPriceSpan.className = 'number-price';
    numberPriceSpan.textContent = `${e.price} جنيه`;

    pricesDiv.appendChild(priceLabel);
    pricesDiv.appendChild(priceColon);
    pricesDiv.appendChild(numberPriceSpan);

    // قسم الخيارات
    const optionsSection = document.createElement('div');
    optionsSection.className = 'options-section';

    // خيارات الحجم
    const optionTitle1 = document.createElement('div');
    optionTitle1.className = 'option-title';
    optionTitle1.textContent = 'اختر الحجم:';

    const sizeOptionsDiv = document.createElement('div');
    sizeOptionsDiv.className = 'size-options';

    // خيار الحجم الصغير
    const sizeOption1 = document.createElement('div');
    sizeOption1.className = 'size-option selected';
    const sizeText1 = document.createElement('div');
    sizeText1.textContent = `${e.detailedInfo.sizeOptions[0].size}`;
    const sizeDetails1 = document.createElement('div');
    sizeDetails1.className = 'size-details';
    const priceSpan1 = document.createElement('span');
    priceSpan1.className = 'pre';
    priceSpan1.textContent = `${e.detailedInfo.sizeOptions[0].price} جنيه `;
    const personsSpan1 = document.createElement('span');
    personsSpan1.textContent = `${e.detailedInfo.sizeOptions[0].serves} `;

    sizeDetails1.appendChild(priceSpan1);
    sizeDetails1.appendChild(personsSpan1);
    sizeOption1.appendChild(sizeText1);
    sizeOption1.appendChild(sizeDetails1);

    // خيار الحجم المتوسط
    const sizeOption2 = document.createElement('div');
    sizeOption2.className = 'size-option';
    const sizeText2 = document.createElement('div');
    sizeText2.textContent = `${e.detailedInfo.sizeOptions[1].size}`;
    const sizeDetails2 = document.createElement('div');
    sizeDetails2.className = 'size-details';
    const priceSpan2 = document.createElement('span');
    priceSpan2.className = 'pre';
    priceSpan2.textContent = `${e.detailedInfo.sizeOptions[1].price} جنيه `;
    const personsSpan2 = document.createElement('span');
    personsSpan2.className = 'pre';
    personsSpan2.textContent = `${e.detailedInfo.sizeOptions[1].serves} `;

    sizeDetails2.appendChild(priceSpan2);
    sizeDetails2.appendChild(personsSpan2);
    sizeOption2.appendChild(sizeText2);
    sizeOption2.appendChild(sizeDetails2);

    // خيار الحجم الكبير
    const sizeOption3 = document.createElement('div');
    sizeOption3.className = 'size-option';
    const sizeText3 = document.createElement('div');
    sizeText3.textContent = `${e.detailedInfo.sizeOptions[2].size}`;
    const sizeDetails3 = document.createElement('div');
    sizeDetails3.className = 'size-details';
    const priceSpan3 = document.createElement('span');
    priceSpan3.textContent = `${e.detailedInfo.sizeOptions[2].price} جنيه `;
    const personsSpan3 = document.createElement('span');
    personsSpan3.textContent = `${e.detailedInfo.sizeOptions[2].serves} `;

    sizeDetails3.appendChild(priceSpan3);
    sizeDetails3.appendChild(personsSpan3);
    sizeOption3.appendChild(sizeText3);
    sizeOption3.appendChild(sizeDetails3);

    sizeOptionsDiv.appendChild(sizeOption1);
    sizeOptionsDiv.appendChild(sizeOption2);
    sizeOptionsDiv.appendChild(sizeOption3);

    // خيارات العجينة
    const optionTitle2 = document.createElement('div');
    optionTitle2.className = 'option-title';
    optionTitle2.textContent = 'اختر نوع العجينة:';

    const crustOptionsDiv = document.createElement('div');
    crustOptionsDiv.className = 'crust-options';

    // خيار العجينة 1
    const crustOption1 = document.createElement('div');
    crustOption1.className = 'crust-option selected';
    const crustText1 = document.createTextNode(`${e.detailedInfo.crustOptions[0].type}`);
    const crustSpan1 = document.createElement('span');
    crustSpan1.textContent = `${e.detailedInfo.crustOptions[0].additionalPrice}`;
    crustOption1.appendChild(crustText1);
    crustOption1.appendChild(crustSpan1);

    // خيار العجينة 2
    const crustOption2 = document.createElement('div');
    crustOption2.className = 'crust-option';
    const crustText2 = document.createTextNode(`${e.detailedInfo.crustOptions[1].type}(+`);
    const crustSpan2 = document.createElement('span');
    crustSpan2.textContent = `${e.detailedInfo.crustOptions[1].additionalPrice}`;
    const crustText2End = document.createTextNode(' جبنة )');
    crustOption2.appendChild(crustText2);
    crustOption2.appendChild(crustSpan2);
    crustOption2.appendChild(crustText2End);

    // خيار العجينة 3    في تعديل هنا في ملف json
    const crustOption3 = document.createElement('div');
    crustOption3.className = 'crust-option';
    const crustText3 = document.createTextNode(`${e.detailedInfo.crustOptions[1].type}(+`);
    const crustSpan3 = document.createElement('span');
    crustSpan3.textContent = `${e.detailedInfo.crustOptions[1].additionalPrice}`;
    const crustText3End = document.createTextNode(' جبنة)');
    crustOption3.appendChild(crustText3);
    crustOption3.appendChild(crustSpan3);
    crustOption3.appendChild(crustText3End);

    crustOptionsDiv.appendChild(crustOption1);
    crustOptionsDiv.appendChild(crustOption2);
    crustOptionsDiv.appendChild(crustOption3);

    optionsSection.appendChild(optionTitle1);
    optionsSection.appendChild(sizeOptionsDiv);
    optionsSection.appendChild(optionTitle2);
    optionsSection.appendChild(crustOptionsDiv);

    // قسم الكمية
    const formsDiv = document.createElement('div');
    formsDiv.className = 'forms';

    const countLabel = document.createElement('div');
    countLabel.className = 'coutn';
    countLabel.textContent = 'الكميه:';

    const plusSpan = document.createElement('span');
    plusSpan.textContent = '+';

    const quantityInput = document.createElement('input');
    quantityInput.type = 'text';
    quantityInput.className = 'coutm-number';
    quantityInput.value = '1';

    const minusSpan = document.createElement('span');
    minusSpan.textContent = '-';

    formsDiv.appendChild(countLabel);
    formsDiv.appendChild(plusSpan);
    formsDiv.appendChild(quantityInput);
    formsDiv.appendChild(minusSpan);

    // الأزرار
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'carAdd';
    addToCartBtn.textContent = 'اضف الي السله';

    const orderNowBtn = document.createElement('button');
    orderNowBtn.className = 'request-Naw';
    orderNowBtn.textContent = 'اطلب الان';

    buttonsDiv.appendChild(addToCartBtn);
    buttonsDiv.appendChild(orderNowBtn);

    // تجميع قسم الوصف
    descriptionDiv.appendChild(titleDiv);
    descriptionDiv.appendChild(pricesDiv);
    descriptionDiv.appendChild(optionsSection);
    descriptionDiv.appendChild(formsDiv);
    descriptionDiv.appendChild(buttonsDiv);

    // تجميع القسم الرئيسي
    mainDetailsDiv.appendChild(imagesDetailsDiv);
    mainDetailsDiv.appendChild(descriptionDiv);

    // تجميع الحاوية
    container.appendChild(nameProductDiv);
    container.appendChild(mainDetailsDiv);

    // تجميع العنصر الرئيسي
    detailsElement.appendChild(container);






    let Imges = document.querySelectorAll(".last-imges img");
    let largImges = document.querySelector(".main-imges img");
    let optionsSectionSize = document.querySelectorAll(".options-section .size-option");
    let optionsSectionCrust = document.querySelectorAll(".crust-options .crust-option");
    let mainPrice = (document.querySelector(".descirption .prices .number-price"));

    let inputCount = document.querySelector(".forms input");
    let increment = document.querySelectorAll(".forms span");


    let count_namber = document.querySelector(".forms .coutm-number");

   count_namber.addEventListener("input", () => {
    count_namber.value = count_namber.value.replace(/[^0-9]/g, "");
});


















    mainPrice.innerHTML = `${e.price} جنيه`
    let total = 0;
    let crustPrice = 0;
    let sizePrice = 0;

    optionsSectionSize.forEach(option => {

        option.addEventListener("click", op => {
            total -= sizePrice;
            sizePrice = parseInt(op.currentTarget.querySelector('span').innerHTML);
            total += sizePrice;
            mainPrice.innerHTML = total + " جنيه "
            optionsSectionSize.forEach(el => {
                el.classList.remove("selected")
            })
            op.currentTarget.classList.add("selected")
        })
    })

    optionsSectionCrust.forEach(option => {
        option.addEventListener("click", op => {
            total -= crustPrice;
            crustPrice = parseInt(op.currentTarget.querySelector('span').innerHTML);
            total += crustPrice;
            mainPrice.innerHTML = total + " جنيه "

            optionsSectionCrust.forEach(el => {
                el.classList.remove("selected")
            })
            op.currentTarget.classList.add("selected");

        })
    })



    Imges.forEach(e => {
        e.addEventListener("click", img => {
            Imges.forEach(elem => {
                elem.classList.remove("actives")
            })
            img.target.classList.add("actives");
            largImges.src = `${img.target.src}`
        })
    })


    increment.forEach(e => {
        e.addEventListener("click", span => {
            if (span.currentTarget.innerHTML == "+") {
                inputCount.value++;
                sizePrice * inputCount
            } else if (span.currentTarget.innerHTML == "-") {
                if (inputCount.value == "1") {
                    return;
                }
                inputCount.value--;
            }
        })
    })


}



function elel(e) {
    // إنشاء العنصر الرئيسي
    const moreDetails = document.querySelector('.more-details');
    // moreDetails.className = 'more-details';

    // إنشاء الحاوية
    const container = document.createElement('div');
    container.className = 'container';

    // إنشاء التبويبات
    const tabs = document.createElement('div');
    tabs.className = 'tabs';

    // إنشاء التبويب الأول
    const tab1 = document.createElement('div');
    tab1.className = 'thosen';
    tab1.setAttribute('data-clases', '.ones');
    tab1.textContent = 'الوصف التفصيلي';

    // إنشاء التبويب الثاني
    const tab2 = document.createElement('div');
    tab2.setAttribute('data-clases', '.twos');
    tab2.textContent = 'المكونات';

    // إنشاء التبويب الثالث
    const tab3 = document.createElement('div');
    tab3.setAttribute('data-clases', '.threes');
    tab3.textContent = 'القيمة الغذائية';

    // إنشاء التبويب الرابع
    const tab4 = document.createElement('div');
    tab4.setAttribute('data-clases', '.fours');
    tab4.textContent = 'التقييمات';

    // إضافة التبويبات إلى tabs
    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);
    tabs.appendChild(tab4);

    // إنشاء محتويات التبويبات
    const contents = document.createElement('div');
    contents.className = 'contents';

    // المحتوى الأول - الوصف التفصيلي
    const content1 = document.createElement('div');
    content1.className = 'ones';

    const h4_1 = document.createElement('h4');
    h4_1.textContent = `${e.name}`;

    const p1 = document.createElement('p');
    p1.textContent = `${e.detailedInfo.fullDescription}`;

    const infoMore = document.createElement('div');
    infoMore.className = 'info-moe';
    infoMore.textContent = 'معلومات إضافية:';

    const ul1 = document.createElement('ul');

    const li1 = document.createElement('li');
    const span1 = document.createElement('span');
    span1.textContent = 'وقت التحضير:';
    li1.appendChild(span1);
    li1.appendChild(document.createTextNode(`${e.detailedInfo.preparationTime}`));

    const li2 = document.createElement('li');
    const span2 = document.createElement('span');
    span2.textContent = 'طريقة الطهي:';
    li2.appendChild(span2);
    li2.appendChild(document.createTextNode(`${e.detailedInfo.cookingInstructions}`));

    const li3 = document.createElement('li');
    const span3 = document.createElement('span');
    span3.textContent = 'مستوى الحرارة:';
    li3.appendChild(span3);
    li3.appendChild(document.createTextNode(`${e.detailedInfo.spicinessLevel}/5 (غير حار)`));

    const li4 = document.createElement('li');
    const span4 = document.createElement('span');
    span4.textContent = 'مدة الصلاحية: ';
    li4.appendChild(span4);
    li4.appendChild(document.createTextNode(`${e.detailedInfo.storageInstructions}`));

    const li5 = document.createElement('li');
    const span5 = document.createElement('span');
    span5.textContent = 'توصية الشيف:';
    li5.appendChild(span5);
    li5.appendChild(document.createTextNode(`${e.detailedInfo.chefRecommendation}`));

    const li6 = document.createElement('li');
    const span6 = document.createElement('span');
    span6.textContent = 'الأطباق المناسبة:';
    li6.appendChild(span6);
    li6.appendChild(document.createTextNode(`${e.detailedInfo.pairingSuggestions}`));

    ul1.appendChild(li1);
    ul1.appendChild(li2);
    ul1.appendChild(li3);
    ul1.appendChild(li4);
    ul1.appendChild(li5);
    ul1.appendChild(li6);

    const conteValue = document.createElement('div');
    conteValue.className = 'conte-value';

    const conteValueDiv = document.createElement('div');
    conteValueDiv.textContent = 'المحتوى الغذائي (للحجم المتوسط):';

    const conteValueP = document.createElement('p');
    // conteValueP.textContent = 'تحتوي على &` سعر حراري، 35 جم بروتين، 110 جم كربوهيدرات، 28 جم دهون، 5 جم ألياف، 1200 ملجم صوديوم.';
    conteValueP.textContent = `  تحتوي على  ${e.detailedInfo.nutritionalInfo.calories}  سعر حراري،

${e.detailedInfo.nutritionalInfo.protein} بروتين، 
${e.detailedInfo.nutritionalInfo.carbs} كربوهيدرات،  
${e.detailedInfo.nutritionalInfo.fat} دهون،  
${e.detailedInfo.nutritionalInfo.fiber} ألياف،  
${e.detailedInfo.nutritionalInfo.sodium}  صوديوم `;
    conteValue.appendChild(conteValueDiv);
    conteValue.appendChild(conteValueP);

    content1.appendChild(h4_1);
    content1.appendChild(p1);
    content1.appendChild(infoMore);
    content1.appendChild(ul1);
    content1.appendChild(conteValue);

    // المحتوى الثاني - المكونات
    const content2 = document.createElement('div');
    content2.className = 'twos';

    const h4_2 = document.createElement('h4');
    h4_2.textContent = ` مكونات ${e.name} `;

    const ul2 = document.createElement('ul');

    // العنصر الأول في المكونات
    const li2_1 = document.createElement('li');
    const h5_1 = document.createElement('h5');
    h5_1.textContent = `${e.detailedInfo.ingredients[0].name}`;
    const h6_1 = document.createElement('h6');
    h6_1.textContent = ` الكميه: ${e.detailedInfo.ingredients[0].quantity}`;
    const div1 = document.createElement('div');
    div1.textContent = `${e.detailedInfo.ingredients[0].details}`;
    li2_1.appendChild(h5_1);
    li2_1.appendChild(h6_1);
    li2_1.appendChild(div1);

    // العنصر الثاني في المكونات
    const li2_2 = document.createElement('li');
    const h5_2 = document.createElement('h5');
    h5_2.textContent = `${e.detailedInfo.ingredients[1].name}`;
    const h6_2 = document.createElement('h6');
    h6_2.textContent = ` الكميه: ${e.detailedInfo.ingredients[1].quantity}`;
    const div2 = document.createElement('div');
    div2.textContent = `${e.detailedInfo.ingredients[1].details}`;
    li2_2.appendChild(h5_2);
    li2_2.appendChild(h6_2);
    li2_2.appendChild(div2);

    // العنصر الثالث في المكونات
    const li2_3 = document.createElement('li');
    const h5_3 = document.createElement('h5');
    h5_3.textContent = `${e.detailedInfo.ingredients[2].name}`;
    const h6_3 = document.createElement('h6');
    h6_3.textContent = ` الكميه: ${e.detailedInfo.ingredients[2].quantity}`;
    const div3 = document.createElement('div');
    div3.textContent = `${e.detailedInfo.ingredients[2].details}`;
    li2_3.appendChild(h5_3);
    li2_3.appendChild(h6_3);
    li2_3.appendChild(div3);

    // العنصر الرابع في المكونات
    const li2_4 = document.createElement('li');
    const h5_4 = document.createElement('h5');
    h5_4.textContent = `${e.detailedInfo.ingredients[3].name}`;
    const h6_4 = document.createElement('h6');
    h6_4.textContent = ` الكميه: ${e.detailedInfo.ingredients[3].quantity}`;
    const div4 = document.createElement('div');
    div4.textContent = `${e.detailedInfo.ingredients[3].details}`;
    li2_4.appendChild(h5_4);
    li2_4.appendChild(h6_4);
    li2_4.appendChild(div4);

    // العنصر الخامس في المكونات
    const li2_5 = document.createElement('li');
    const h5_5 = document.createElement('h5');
    h5_5.textContent = `${e.detailedInfo.ingredients[4].name}`;;
    const h6_5 = document.createElement('h6');
    h6_5.textContent = ` الكميه: ${e.detailedInfo.ingredients[4].quantity}`;
    const div5 = document.createElement('div');
    div5.textContent = `${e.detailedInfo.ingredients[4].details}`;;
    li2_5.appendChild(h5_5);
    li2_5.appendChild(h6_5);
    li2_5.appendChild(div5);

    // العنصر السادس في المكونات
    const li2_6 = document.createElement('li');
    const h5_6 = document.createElement('h5');
    h5_6.textContent = 'ملح البحر';
    const h6_6 = document.createElement('h6');
    h6_6.textContent = 'الكمية: 5 جم';
    const div6 = document.createElement('div');
    div6.textContent = 'ملح بحري طبيعي';
    li2_6.appendChild(h5_6);
    li2_6.appendChild(h6_6);
    li2_6.appendChild(div6);

    ul2.appendChild(li2_1);
    ul2.appendChild(li2_2);
    ul2.appendChild(li2_3);
    ul2.appendChild(li2_4);
    ul2.appendChild(li2_5);
    ul2.appendChild(li2_6);

    const steci = document.createElement('div');
    steci.className = 'steci';
    steci.textContent = 'يحوي على مسببات للحساسية:';
    const steciSpan = document.createElement('span');
    steciSpan.textContent = 'جلوتين، لاكتوز';
    steci.appendChild(steciSpan);

    content2.appendChild(h4_2);
    content2.appendChild(ul2);
    content2.appendChild(steci);

    // المحتوى الثالث - القيمة الغذائية
    const content3 = document.createElement('div');
    content3.className = 'threes';

    const h4_3 = document.createElement('h4');
    h4_3.textContent = 'المعلومات الغذائية';

    const valuesUl = document.createElement('ul');
    valuesUl.className = 'values';

    const valueLi1 = document.createElement('li');
    const valueSpan1 = document.createElement('span');
    valueSpan1.textContent = `${e.detailedInfo.nutritionalInfo.calories}`;
    const valueP1 = document.createElement('p');
    valueP1.textContent = 'سعر حراري';
    valueLi1.appendChild(valueSpan1);
    valueLi1.appendChild(valueP1);

    const valueLi2 = document.createElement('li');
    const valueSpan2 = document.createElement('span');
    valueSpan2.textContent = `${e.detailedInfo.nutritionalInfo.protein}`;
    const valueP2 = document.createElement('p');
    valueP2.textContent = 'بروتين';
    valueLi2.appendChild(valueSpan2);
    valueLi2.appendChild(valueP2);

    const valueLi3 = document.createElement('li');
    const valueSpan3 = document.createElement('span');
    valueSpan3.textContent = `${e.detailedInfo.nutritionalInfo.carbs}`;
    const valueP3 = document.createElement('p');
    valueP3.textContent = 'كربوهيدرات';
    valueLi3.appendChild(valueSpan3);
    valueLi3.appendChild(valueP3);

    const valueLi4 = document.createElement('li');
    const valueSpan4 = document.createElement('span');
    valueSpan4.textContent = `${e.detailedInfo.nutritionalInfo.fat}`;
    const valueP4 = document.createElement('p');
    valueP4.textContent = 'دهون';
    valueLi4.appendChild(valueSpan4);
    valueLi4.appendChild(valueP4);

    const valueLi5 = document.createElement('li');
    const valueSpan5 = document.createElement('span');
    valueSpan5.textContent = `${e.detailedInfo.nutritionalInfo.fiber}`;
    const valueP5 = document.createElement('p');
    valueP5.textContent = 'ألياف';
    valueLi5.appendChild(valueSpan5);
    valueLi5.appendChild(valueP5);

    const valueLi6 = document.createElement('li');
    const valueSpan6 = document.createElement('span');
    valueSpan6.textContent = `${e.detailedInfo.nutritionalInfo.sodium}`;
    const valueP6 = document.createElement('p');
    valueP6.textContent = 'صوديوم';
    valueLi6.appendChild(valueSpan6);
    valueLi6.appendChild(valueP6);

    valuesUl.appendChild(valueLi1);
    valuesUl.appendChild(valueLi2);
    valuesUl.appendChild(valueLi3);
    valuesUl.appendChild(valueLi4);
    valuesUl.appendChild(valueLi5);
    valuesUl.appendChild(valueLi6);

    const h3 = document.createElement('h3');
    h3.textContent = 'القيم اليومية الموصى بها*';

    const exterUl = document.createElement('ul');
    exterUl.className = 'exter';

    const exterLi1 = document.createElement('li');
    const exterSpan1 = document.createElement('span');
    exterSpan1.textContent = `${e.detailedInfo.dailyValues[0].label}`;
    const exterDiv1 = document.createElement('div');
    exterDiv1.textContent = `${e.detailedInfo.dailyValues[0].value}`;
    exterLi1.appendChild(exterSpan1);
    exterLi1.appendChild(exterDiv1);

    const exterLi2 = document.createElement('li');
    const exterSpan2 = document.createElement('span');
    exterSpan2.textContent = `${e.detailedInfo.dailyValues[1].label}`;
    const exterDiv2 = document.createElement('div');
    exterDiv2.textContent = `${e.detailedInfo.dailyValues[1].value}`;
    exterLi2.appendChild(exterSpan2);
    exterLi2.appendChild(exterDiv2);


    const exterLi3 = document.createElement('li');
    const exterSpan3 = document.createElement('span');
    exterSpan3.textContent = `${e.detailedInfo.dailyValues[3].label}`;
    const exterDiv3 = document.createElement('div');
    exterDiv3.textContent = `${e.detailedInfo.dailyValues[3].value}`;
    exterLi3.appendChild(exterSpan3);
    exterLi3.appendChild(exterDiv3);

    const exterLi6 = document.createElement('li');
    const exterSpan6 = document.createElement('span');
    exterSpan6.textContent = `${e.detailedInfo.dailyValues[2].label}`;
    const exterDiv6 = document.createElement('div');
    exterDiv6.textContent = `${e.detailedInfo.dailyValues[2].value}`;
    exterLi6.appendChild(exterSpan6);
    exterLi6.appendChild(exterDiv6);


    const exterLi4 = document.createElement('li');
    const exterSpan4 = document.createElement('span');
    exterSpan4.textContent = `${e.detailedInfo.dailyValues[4].label}`;
    const exterDiv4 = document.createElement('div');
    exterDiv4.textContent = `${e.detailedInfo.dailyValues[4].value}`;
    exterLi4.appendChild(exterSpan4);
    exterLi4.appendChild(exterDiv4);

    const exterLi5 = document.createElement('li');
    const exterSpan5 = document.createElement('span');
    exterSpan5.textContent = `${e.detailedInfo.dailyValues[5].label}`;
    const exterDiv5 = document.createElement('div');
    exterDiv5.textContent = `${e.detailedInfo.dailyValues[5].value}`;
    exterLi5.appendChild(exterSpan5);
    exterLi5.appendChild(exterDiv5);

    exterUl.appendChild(exterLi1);
    exterUl.appendChild(exterLi2);
    exterUl.appendChild(exterLi6);
    exterUl.appendChild(exterLi3);
    exterUl.appendChild(exterLi4);
    exterUl.appendChild(exterLi5);

    const tabsx = document.createElement('div');
    tabsx.className = 'tabsx';
    tabsx.textContent = '*القيم التقريبية وقد تختلف حسب حجم البيتزا والإضافات';

    content3.appendChild(h4_3);
    content3.appendChild(valuesUl);
    content3.appendChild(h3);
    content3.appendChild(exterUl);
    content3.appendChild(tabsx);

    // المحتوى الرابع - التقييمات
    const content4 = document.createElement('div');
    content4.className = 'fours';

    const h4_4 = document.createElement('h4');
    h4_4.textContent = 'تقييمات العملاء';

    const ul4 = document.createElement('ul');

    // التقييم الأول
    const reviewLi1 = document.createElement('li');
    const comments1 = document.createElement('div');
    comments1.className = 'coments';

    const name1 = document.createElement('div');
    name1.textContent = `${e.detailedInfo.customerReviews[0].user}`;

    const stars1 = document.createElement('div');
    stars1.className = 'stars';

    const star1_1 = document.createElement('i');
    star1_1.className = 'fa-solid fa-star';
    star1_1.style.color = 'gold';

    const star1_2 = document.createElement('i');
    star1_2.className = 'fa-solid fa-star';
    star1_2.style.color = 'gold';

    const star1_3 = document.createElement('i');
    star1_3.className = 'fa-solid fa-star';
    star1_3.style.color = 'gold';

    const star1_4 = document.createElement('i');
    star1_4.className = 'fa-solid fa-star';

    const star1_5 = document.createElement('i');
    star1_5.className = 'fa-solid fa-star';

    stars1.appendChild(star1_1);
    stars1.appendChild(star1_2);
    stars1.appendChild(star1_3);
    stars1.appendChild(star1_4);
    stars1.appendChild(star1_5);

    const reviewP1 = document.createElement('p');
    reviewP1.textContent = `${e.detailedInfo.customerReviews[0].comment}`

    comments1.appendChild(name1);
    comments1.appendChild(stars1);
    comments1.appendChild(reviewP1);

    const date1 = document.createElement('div');
    date1.className = 'date';
    const dateSpan1 = document.createElement('span');
    dateSpan1.textContent = `${e.detailedInfo.customerReviews[0].date}`;
    date1.appendChild(dateSpan1);

    reviewLi1.appendChild(comments1);
    reviewLi1.appendChild(date1);

    // التقييم الثاني
    const reviewLi2 = document.createElement('li');
    const comments2 = document.createElement('div');
    comments2.className = 'coments';

    const name2 = document.createElement('div');
    name2.textContent = `${e.detailedInfo.customerReviews[1].user}`;

    const stars2 = document.createElement('div');
    stars2.className = 'stars';

    const star2_1 = document.createElement('i');
    star2_1.className = 'fa-solid fa-star';
    star2_1.style.color = 'gold';

    const star2_2 = document.createElement('i');
    star2_2.className = 'fa-solid fa-star';
    star2_2.style.color = 'gold';

    const star2_3 = document.createElement('i');
    star2_3.className = 'fa-solid fa-star';
    star2_3.style.color = 'gold';

    const star2_4 = document.createElement('i');
    star2_4.className = 'fa-solid fa-star';
    star2_4.style.color = 'gold';

    const star2_5 = document.createElement('i');
    star2_5.className = 'fa-solid fa-star';

    stars2.appendChild(star2_1);
    stars2.appendChild(star2_2);
    stars2.appendChild(star2_3);
    stars2.appendChild(star2_4);
    stars2.appendChild(star2_5);

    const reviewP2 = document.createElement('p');
    reviewP2.textContent = `${e.detailedInfo.customerReviews[1].comment}`

    comments2.appendChild(name2);
    comments2.appendChild(stars2);
    comments2.appendChild(reviewP2);

    const date2 = document.createElement('div');
    date2.className = 'date';
    const dateSpan2 = document.createElement('span');
    dateSpan2.textContent = `${e.detailedInfo.customerReviews[1].date}`;
    date2.appendChild(dateSpan2);

    reviewLi2.appendChild(comments2);
    reviewLi2.appendChild(date2);

    // التقييم الثاني
    const reviewLi4 = document.createElement('li');
    const comments4 = document.createElement('div');
    comments4.className = 'coments';

    const name4 = document.createElement('div');
    name4.textContent = `${e.detailedInfo.customerReviews[2].user}`;

    const stars4 = document.createElement('div');
    stars4.className = 'stars';

    const star4_1 = document.createElement('i');
    star4_1.className = 'fa-solid fa-star';
    star4_1.style.color = 'gold';

    const star4_2 = document.createElement('i');
    star4_2.className = 'fa-solid fa-star';
    star4_2.style.color = 'gold';

    const star4_3 = document.createElement('i');
    star4_3.className = 'fa-solid fa-star';
    star4_3.style.color = 'gold';

    const star4_4 = document.createElement('i');
    star4_4.className = 'fa-solid fa-star';
    star4_4.style.color = 'gold';

    const star4_5 = document.createElement('i');
    star4_5.className = 'fa-solid fa-star';

    stars4.appendChild(star4_1);
    stars4.appendChild(star4_2);
    stars4.appendChild(star4_3);
    stars4.appendChild(star4_4);
    stars4.appendChild(star4_5);
    stars4.appendChild(star4_5);

    const reviewP4 = document.createElement('p');
    reviewP4.textContent = `${e.detailedInfo.customerReviews[2].comment}`

    comments4.appendChild(name4);
    comments4.appendChild(stars4);
    comments4.appendChild(reviewP4);

    const date4 = document.createElement('div');
    date4.className = 'date';
    const dateSpan4 = document.createElement('span');
    dateSpan4.textContent = `${e.detailedInfo.customerReviews[2].date}`;
    date4.appendChild(dateSpan4);

    reviewLi4.appendChild(comments4);
    reviewLi4.appendChild(date4);

    // التقييم الثالث
    const reviewLi3 = document.createElement('li');
    const comments3 = document.createElement('div');
    comments3.className = 'coments';

    const name3 = document.createElement('div');
    name3.textContent = `${e.detailedInfo.customerReviews[3].user}`;

    const stars3 = document.createElement('div');
    stars3.className = 'stars';

    const star3_1 = document.createElement('i');
    star3_1.className = 'fa-solid fa-star';
    star3_1.style.color = 'gold';

    const star3_2 = document.createElement('i');
    star3_2.className = 'fa-solid fa-star';
    star3_2.style.color = 'gold';

    const star3_3 = document.createElement('i');
    star3_3.className = 'fa-solid fa-star';
    star3_3.style.color = 'gold';

    const star3_4 = document.createElement('i');
    star3_4.className = 'fa-solid fa-star';
    star3_4.style.color = 'gold';

    const star3_5 = document.createElement('i');
    star3_5.className = 'fa-solid fa-star';
    star3_5.style.color = 'gold';

    stars3.appendChild(star3_1);
    stars3.appendChild(star3_2);
    stars3.appendChild(star3_3);
    stars3.appendChild(star3_4);
    stars3.appendChild(star3_5);

    const reviewP3 = document.createElement('p');
    reviewP3.textContent = `${e.detailedInfo.customerReviews[3].comment}`;

    comments3.appendChild(name3);
    comments3.appendChild(stars3);
    comments3.appendChild(reviewP3);

    const date3 = document.createElement('div');
    date3.className = 'date';
    const dateSpan3 = document.createElement('span');
    dateSpan3.textContent = `${e.detailedInfo.customerReviews[3].date}`;
    date3.appendChild(dateSpan3);

    reviewLi3.appendChild(comments3);
    reviewLi3.appendChild(date3);

    ul4.appendChild(reviewLi1);
    ul4.appendChild(reviewLi2);
    ul4.appendChild(reviewLi3);
    ul4.appendChild(reviewLi4);

    const addComent = document.createElement('div');
    addComent.className = 'add-coment';

    const rev = document.createElement('div');
    rev.className = 'rev';
    rev.textContent = 'أضف تقييمك:';

    const revesStras = document.createElement('div');
    revesStras.className = 'reves-stras';

    const addStar1 = document.createElement('i');
    addStar1.className = 'fa-solid fa-star';

    const addStar2 = document.createElement('i');
    addStar2.className = 'fa-solid fa-star';

    const addStar3 = document.createElement('i');
    addStar3.className = 'fa-solid fa-star';

    const addStar4 = document.createElement('i');
    addStar4.className = 'fa-solid fa-star';

    const addStar5 = document.createElement('i');
    addStar5.className = 'fa-solid fa-star';

    revesStras.appendChild(addStar1);
    revesStras.appendChild(addStar2);
    revesStras.appendChild(addStar3);
    revesStras.appendChild(addStar4);
    revesStras.appendChild(addStar5);

    const textarea = document.createElement('textarea');
    textarea.placeholder = 'اكتب تقييمك هنا...';

    const button = document.createElement('button');
    button.textContent = 'إرسال التقييم';

    addComent.appendChild(rev);
    addComent.appendChild(revesStras);
    addComent.appendChild(textarea);
    addComent.appendChild(button);

    content4.appendChild(h4_4);
    content4.appendChild(ul4);
    content4.appendChild(addComent);

    // إضافة جميع المحتويات إلى contents
    contents.appendChild(content1);
    contents.appendChild(content2);
    contents.appendChild(content3);
    contents.appendChild(content4);

    // إضافة tabs و contents إلى container
    container.appendChild(tabs);
    container.appendChild(contents);

    // إضافة container إلى moreDetails
    moreDetails.appendChild(container);


    let tabss = document.querySelectorAll(".more-details .container .tabs > div");
    let contentss = document.querySelectorAll(".contents >div");
    let revesStrass = document.querySelectorAll(".reves-stras > i");
console.log(contentss)


    tabss.forEach(tab => {
        tab.addEventListener("click", tab => {
            tabss.forEach(e => {
                e.classList.remove("thosen")
            })
            tab.currentTarget.classList.add("thosen");
            contentss.forEach(cont => {
                cont.style.display = "none"
            })
            // console.log(document.querySelector(tab.currentTarget.dataset.clases))
            document.querySelector(tab.currentTarget.dataset.clases).style.display = "block";
        })
    })

    revesStrass.forEach(star => {
        star.addEventListener("click", e => {
            e.target.style.color = "gold"
        })
    })
    // إضافة العنصر إلى الصفحة
}





change_address.addEventListener("click", e => {
    if (addressInput.value.trim() !== "") {
        addressText.innerHTML = addressInput.value;
        addressInput.value = "";
    } else {
        document.querySelector(".four").classList.add("active");
            setTimeout(e=>{
                    document.querySelector(".four").classList.remove("active");
            },2000)
    }
})
change_phone.addEventListener("click", e => {

    if (phoneInput.value.trim() !== "") {
        
        let phonetest = phoneInput.value;
        let RE_phone = /01(0|2|5|1)\d{8}$/g
        if(RE_phone.test(phonetest)){
            
            phoneText.innerHTML = phonetest;
                phoneInput.value = ""


        }else{
            document.querySelector(".massege_Error").classList.add("active");
            setTimeout(e=>{
                 document.querySelector(".massege_Error").classList.remove("active");

            },2000)
        }
       

    } else {
        document.querySelector(".two").classList.add("active");
            setTimeout(e=>{
                 document.querySelector(".two").classList.remove("active");

            },2000)
    }

})


confirmOrder.addEventListener("click", e => {
    if(addressText.innerHTML === ""){
        document.querySelector(".four").classList.add("active");
            setTimeout(e=>{document.querySelector(".four").classList.remove("active");
},2000)
            }
     else if(phoneText.innerHTML === ""){
          document.querySelector(".two").classList.add("active");
            setTimeout(e=>{
                 document.querySelector(".two").classList.remove("active");

            },2000);
    }
    else if(checkbox.checked === false){
        document.querySelector(".three").classList.add("active");
            setTimeout(e=>{
                    document.querySelector(".three").classList.remove("active");
            },2000)
    }
   
     
    else{

        localStorage.clear();
        document.querySelector(".five").classList.add("active");


        setTimeout(e=>{
                document.querySelector(".five").classList.remove("active");
                        buttons_two.click();
        },800)
        setTimeout(e=>{
window.location.href = "../index.html";            // location.reload();
        },3000)

        document.querySelector(".success").classList.add("active");
        setTimeout(e=>{
        Checkout.classList.remove("active");

        document.querySelector(".success").classList.add("active");

        // location.reload();
        },1200)


      


        setTimeout(e=>{
            document.querySelector(".success").classList.add("active");
        },7000)

        // document.querySelector(".success").classList.add("active");

    }
   
})


















 wow =document.querySelectorAll(".wow")


 r =0;


window.addEventListener("scroll",e=>{
    for(i =0;i<wow.length;i++){
        if(wow[i].getBoundingClientRect().top <window.innerHeight -100){
            wow[i].classList.add("show")
        }else{
            wow[i].classList.remove("show")
        }
    }
})









    let caarygore = document.querySelectorAll(".caarygore .container ul a");
    caarygore.forEach(a=>{
        a.addEventListener("click",e=>{
                e.preventDefault();
            caarygore.forEach(li=>{
                li.classList.remove("active");
            })
            e.target.classList.add("active");
        })
    })
    // let nav = document.querySelector("nav")

let hamburger  = document.getElementById("hamburger");
hamburger.addEventListener("click",e=>{

    hamburger.classList.toggle("active")
    nav.classList.toggle("active")
})


if (window.location.pathname===("/pizza/html-file/muen.html")) {

let text = "اكتشف تشكيلتنا المتنوعة من البيتزا المعدة يومياً";
   let i = 0;
    let speed = 200;
    let isDeleting = false;

    function typeEffect() {
      let element = document.getElementById("head_para_main");

      if (!isDeleting) {
        // كتابة
        element.innerHTML = text.slice(0, i + 1);
        i++;

        if (i === text.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 3000);
        }

      } else {
        // مسح
        element.innerHTML = text.slice(0, i - 1);
        i--;

        if (i === 0) {
          isDeleting = false;
        }
      }

      setTimeout(typeEffect, isDeleting ? 60 : speed);
    }

    typeEffect();


let imges_land = document.querySelectorAll(".laind .images img");

window.onload = function() {
    imges_land.forEach(img => {
        img.classList.add("active");
    });



            let add_botn = document.querySelectorAll(".add-btn");
            add_botn.forEach(link=>{

                link.addEventListener("click",e=>{
                    
                const toast = document.getElementById('toast');
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
                })
            })
       
        
}










}