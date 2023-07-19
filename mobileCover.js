let products = {
  data: [
    {
      productName: "Iphone X",
      category: "Iphone",
      price: "99",
      image: "./icon/IphoneX.jpg",
    },
    {
      productName: "Iphone 11",
      category: "Iphone",
      price: "199",
      image: "./icon/Iphone11.jpg",
    },
    {
      productName: "Iphone 12",
      category: "Iphone",
      price: "199",
      image: "./icon/Iphone12.jpg",
    },
    {
      productName: "Iphone 8",
      category: "Iphone",
      price: "199",
      image: "./icon/Iphone8.jpg",
    },
    {
      productName: "Realme 1",
      category: "Realme",
      price: "199",
      image: "./icon/Realme1.jpg",
    },
    {
      productName: "Realme 2",
      category: "Realme",
      price: "199",
      image: "./icon/rea.jpg",
    },
    {
      productName: "Realme 3",
      category: "Realme",
      price: "199",
      image: "./icon/Realme1.jpg",
    },
    {
      productName: "Samsung",
      category: "Samsung",
      price: "199",
      image: "./icon/Samsung1.jpg",
    },
    {
      productName: "Samsung",
      category: "Samsung",
      price: "199",
      image: "./icon/Samsung2.jpg",
    },
    {
      productName: "OnePlus",
      category: "Oneplus",
      price: "199",
      image: "./icon/Oneplus1.jpg",
    },
  ],
};

for(let i of products.data){
    // create card
    let card = document.createElement('div');

    // card should have category and should stay hidden initially
    card.classList.add("card",i.category,"hide");

    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // image tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container
    let container = document.createElement("div");
    container.classList.add("container");

    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //price
    let price = document.createElement("h6");
    price.innerText = "₹" +i.price;
    container.appendChild(price)


    card.appendChild(container)
    document.getElementById("products").appendChild(card)

}

// parameter passed from button
function filterProduct(value){
    //button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        // check if value equals innertext
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        }else{
            button.classList.remove("active");
        }
    });

    // select all cards
    let elements = document.querySelectorAll(".card");
    // loop through all cards
    elements.forEach(element => {
        // display all cards on 'all' button click
        if(value == 'all'){
            element.classList.remove("hide")            
        }else{
            // check category class
            if(element.classList.contains(value)){
                // display element on based on category
                element.classList.remove("hide");
            }else{
                // hide other
                element.classList.add("hide")
            }
        }
    })
}


// search button click
document.getElementById("search").addEventListener("click",() => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");

    let cards = document.querySelectorAll(".card");
    // console.log(searchInput);

    // loop through all elements
    elements.forEach((element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }else{
            cards[index].classList.add("hide");
        }
    })

})


// Initially display all products
window.onload = () => {
    filterProduct('all');
}