"use strict";

const btndescrip = document.querySelector(".btn-descrip button");
const btninfo = document.querySelector(".btn-info button");
const btnreiew = document.querySelector(".btn-review button");

const description = document.querySelector(".description");
const additional = document.querySelector(".additional");
const reviews = document.querySelector(".reviews");

let leftLine = document.querySelector(".line-2");
let lineMenu = document.querySelector(".menu-line");
let rightLine = document.querySelector(".line-3");

btndescrip.addEventListener("click", function () {
  description.classList.remove("d-none");
  additional.classList.add("d-none");
  reviews.classList.add("d-none");
  this.style = "color:black";
  btninfo.style = "color:#a0a2a4";
  btnreiew.style = "color:#a0a2a4";
  leftLine.style = "display:block";
  lineMenu.style = "display:none";
  rightLine.style = "display:none";
});

btninfo.addEventListener("click", function () {
  description.classList.add("d-none");
  additional.classList.remove("d-none");
  reviews.classList.add("d-none");
  this.style = "color:black";
  btndescrip.style = "color:#a0a2a4";
  btnreiew.style = "color:#a0a2a4";
  lineMenu.style = "display:block";
  rightLine.style = "display:none";
  leftLine.style = "display:none";
});

btnreiew.addEventListener("click", function () {
  description.classList.add("d-none");
  additional.classList.add("d-none");
  reviews.classList.remove("d-none");
  this.style = "color:black";
  btninfo.style = "color:#a0a2a4";
  btndescrip.style = "color:#a0a2a4";
  rightLine.style = "display:block";
  leftLine.style = "display:none";
  lineMenu.style = "display:none";
});

const img1 = document.querySelector(".home-img .img1");
const img2 = document.querySelector(".home-img .img2");
const img3 = document.querySelector(".home-img .img3");

const miniimg1 = document.querySelector(".mini-img .mini-img1");
const miniimg2 = document.querySelector(".mini-img .mini-img2");
const miniimg3 = document.querySelector(".mini-img .mini-img3");

miniimg1.addEventListener("click", function () {
  img1.classList.add("d-none");
  img2.classList.add("d-none");
  img3.classList.remove("d-none");
  this.style = "border: 1px solid black";
  miniimg2.style = "border: none";
  miniimg3.style = "border: none";
});

miniimg2.addEventListener("click", function () {
  this.style = "border: 1px solid black";
  img1.classList.add("d-none");
  img2.classList.remove("d-none");
  img3.classList.add("d-none");
  miniimg1.style = "border: none";
  miniimg3.style = "border: none";
});

miniimg3.addEventListener("click", function () {
  img1.classList.remove("d-none");
  img2.classList.add("d-none");
  img3.classList.add("d-none");
  this.style = "border: 1px solid black";
  miniimg2.style = "border: none";
  miniimg1.style = "border: none";
});
