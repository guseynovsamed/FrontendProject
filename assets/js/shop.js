"use strict";

const sort = document.querySelector("#main-area .filter-area .sort");
const sortIcon = document.querySelector("#main-area .filter-area .sort i");
const checksort = document.querySelector(
  "#main-area .filter-area .sort .check-sort"
);

sort.addEventListener("click", function () {
  checksort.classList.toggle("open");
  sortIcon.classList.toggle("rote");
});




let basket = [];

if (JSON.parse(localStorage.getItem("basket")) == null) {
    localStorage.setItem("basket", JSON.stringify(basket));
} else {

    basket = JSON.parse(localStorage.getItem("basket"));
}

getBasketCount(basket);

function getBasketCount(arr) {
    let basketCount = 0;

    if (arr.length != 0) {
        for (const item of arr) {
            basketCount += item.count;
        }
    }
    document.querySelector(".header-down-right .wish-count").innerText = basketCount;
}


let addBtns = document.querySelectorAll(".products .add-basket");


addBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let productId = parseInt(this.parentNode.parentNode.parentNode.getAttribute("data-id"));
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.parentNode.nextElementSibling.lastElementChild.innerText;
        let productPrice = parseFloat(this.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.lastElementChild.innerText);

        let existProduct = basket.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count++;
        } else {
            basket.push({
                id: productId,
                name: productName,
                image: productImage,
                price: productPrice,
                count: 1
            })
        }

        getBasketCount(basket);

        localStorage.setItem("basket", JSON.stringify(basket));

    })
});




let wish = [];

if (JSON.parse(localStorage.getItem("wish")) == null) {
    localStorage.setItem("wish", JSON.stringify(wish));
} else {

    wish = JSON.parse(localStorage.getItem("wish"));
}

getWishCount(wish);

function getWishCount(arr) {
    let wishCount = 0;

    if (arr.length != 0) {
        for (const item of arr) {
            wishCount += item.count;
        }
    }
    document.querySelector(".header-down-right .basket-count").innerText = wishCount;
}


let wishBtns = document.querySelectorAll(".products .add-wish");


wishBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        let productId = parseInt(this.parentNode.parentNode.parentNode.getAttribute("data-id"));
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.parentNode.nextElementSibling.lastElementChild.innerText;
        let productPrice = parseFloat(this.parentNode.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.lastElementChild.innerText);

        let existProduct = wish.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count++;
        } else {
            wish.push({
                id: productId,
                name: productName,
                image: productImage,
                price: productPrice,
                count: 1
            })
        }

        getWishCount(wish);

        localStorage.setItem("wish", JSON.stringify(wish));

    })
});
