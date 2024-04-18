// ===========accordion================
const acc_items = document.getElementsByClassName("p-wid-acc-item");

for (item of acc_items) {
  item.addEventListener("click", function () {
    this.classList.toggle("selected");

    const acc_icon = this.querySelector("span");

    if (this.classList.contains("selected")) {
      acc_icon.innerText = "remove";
    } else {
      acc_icon.innerText = "add";
    }
  });
}

//============== hamburger menu ================
const hamburger = document.querySelector(".mb-btn");
const closeBtn = document.querySelector(".cm-btn");
const navMenu = document.querySelector(".nav-list");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  // hamburger.classList.toggle("mobile");
  navMenu.classList.add("mobile");
  body.classList.add("mobile-active");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("mobile");
  body.classList.remove("mobile-active");
});

// ==================filter menu====================

const filterBtns = document.querySelectorAll(".news");
const filterClose = document.querySelector(".filter-close");
const blogFilter = document.querySelector(".blog-filter");

filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    blogFilter.classList.toggle("mobile");
    body.classList.toggle("mobile-active");
    console.log("first");
  });
});

filterClose.addEventListener("click", () => {
  blogFilter.classList.remove("mobile");
  body.classList.remove("mobile-active");
});
