var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var css = document.querySelector('#css-link');
var mode = "dark";

themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    css.setAttribute('href','123');
    container.setAttribute("class", "dark");
  }
});