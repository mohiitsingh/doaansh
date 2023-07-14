window.addEventListener("load", () => {
    autoSlide();
 })
 
 function autoSlide() {
    setInterval(() => {
       slide(getItemActiveIndex() + 1);
    }, 7000); // slide speed = 3s
 }
 
 function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
 
    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
       toIndex = 0;
    }
 
    const newItemActive = itemsArray[toIndex];
 
    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
       newItemActive.classList.add("carousel_item__next");
       itemActive.classList.add("carousel_item__next");
    }, 20);
 
    // remove all transition class and switch active class
    newItemActive.addEventListener("transitionend", () => {
       itemActive.className = "carousel_item";
       newItemActive.className = "carousel_item carousel_item__active";
    }, {
       once: true
    });
 }
 

 function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
 }

 //Nav scroll
// window.addEventListener('scroll',() =>{
//     document.querySelector('.left').classList.toggle('window-scroll',window.scrollY > 100);
//     document.querySelector('.right').classList.toggle('window-scroll-right',window.scrollY > 100);
// })

 //hover menu
 var hideTimeout;

 function showContent(city) {
   var content = document.getElementById(city);
   content.style.display = "block";
 }
 
 function hideContent() {
   hideTimeout = setTimeout(function() {
     var tabcontents = document.getElementsByClassName("tabcontent");
     for (var i = 0; i < tabcontents.length; i++) {
       if (!tabcontents[i].matches(":hover")) {
         tabcontents[i].style.display = "none";
       }
     }
   }, 200);
 }
 
//  function cancelHideTimeout() {
//    clearTimeout(hideTimeout);
//  }
 
//  function setHideTimeout() {
//    hideTimeout = setTimeout(function() {
//      var tabcontents = document.getElementsByClassName("tabcontent");
//      for (var i = 0; i < tabcontents.length; i++) {
//        if (!tabcontents[i].matches(":hover")) {
//          tabcontents[i].style.display = "none";
//        }
//      }
//    }, 200);
//  }
 
// ======================= PRODUCTS ===============================
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


//  ====================== hamburger toggle ==========================
// const toggleButton = document.querySelector("#nav-toggle");
// const navLinks = document.getElementById('nav-links');
const toggleButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-container');

toggleButton.addEventListener('click',(e) => {
    e.preventDefault();
    navLinks.classList.toggle('menu-bar-active');
    console.log("object");
})

// =================== TOP =========================
