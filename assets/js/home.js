let cate= document.querySelector(".all-category");
let cateList = document.querySelector(".all-menu");
let cateIcon = document.querySelector(".all-category i");

cate.addEventListener("click", function () {
  cateList.classList.toggle("d-none");
  cateIcon.classList.toggle("open");
});

const newButton = document.querySelector(
  "#trending-products .category .new span"
);

const featuredButton = document.querySelector(
  "#trending-products .category .featured span"
);
const topButton = document.querySelector(
  "#trending-products .category .top span"
);

const line1 = document.querySelector(
  "#trending-products .category .new .line1"
);

const line2 = document.querySelector(
  "#trending-products .category .featured .line2"
);

const line3 = document.querySelector(
  "#trending-products .category .top .line3"
);

const newProduct = document.querySelector("#trending-products .products .new");
const featuredProduct = document.querySelector(
  "#trending-products .products .featured"
);
const topProduct = document.querySelector(
  "#trending-products .products .top-sellers"
);

newButton.addEventListener("click", function () {
  newProduct.classList.remove("d-none");
  line1.classList.remove("d-none");

  featuredProduct.classList.add("d-none");
  line2.classList.add("d-none");

  topProduct.classList.add("d-none");
  line3.classList.add("d-none");
});

featuredButton.addEventListener("click", function () {
  newProduct.classList.add("d-none");
  line1.classList.add("d-none");

  featuredProduct.classList.remove("d-none");
  line2.classList.remove("d-none");

  topProduct.classList.add("d-none");
  line3.classList.add("d-none");
});

topButton.addEventListener("click", function () {
  newProduct.classList.add("d-none");
  line1.classList.add("d-none");

  featuredProduct.classList.add("d-none");
  line2.classList.add("d-none");

  topProduct.classList.remove("d-none");
  line3.classList.remove("d-none");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
