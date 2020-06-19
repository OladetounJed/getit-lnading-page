let menu = document.querySelector(".navbar__menu");
let navbar = document.querySelector(".navbar__right");
let close = document.createElement("img");
close.src = "/images/close.svg";
close.classList.add("navbar__close");

menu.addEventListener("click", function(e) {
  menu.parentNode.replaceChild(close, menu);
  if (e.target.className === "navbar__menu") {
    navbar.style.display = "flex";
  } else if (e.target.className === "close") {
    navbar.style.display = "none";
  }
});

close.addEventListener("click", function(e) {
  if (e.target.className === "navbar__close") {
    navbar.style.display = "none";
    
    close.parentNode.replaceChild(menu, close);
  }
});
