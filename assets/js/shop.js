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
