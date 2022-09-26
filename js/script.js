// 
$(document).ready(function () {
    var sideButtons = document
      .querySelector(".project_ul")
      .getElementsByTagName("li");
    for (var i = 0; i < sideButtons.length; i++) {
      const a = sideButtons[i].getElementsByTagName("a")[0];
      if (window.location.href == a.href) {
        sideButtons[i].classList.add("active");
        break;
      }
    }
  });
// ///////////////////
var burger = document.querySelector(".burger-icon");
console.log(burger);
burger.addEventListener("click", function () {
  document.querySelector(".burger-icon").classList.toggle("active");
  document.querySelector(".project_ul").classList.toggle("active");
});
 