let burgerMenuButton = document.querySelector("#menuButton");
let menu = document.querySelector(".menu");

if (burgerMenuButton) {
    burgerMenuButton.addEventListener("click",(e) => {
        menu.classList.toggle("no-display")
    })
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      console.log("AAAA")
    // document.querySelector(".navbar").style.top = "0";
    document.querySelector(".navbar").style.background = "none";
    document.querySelector(".navbar").style.borderBottom = "none";
    document.querySelector(".links").style.color = "white";
    
} else {
    document.querySelector(".links a").style.color = "black";
    document.querySelector(".navbar").style.background = "white";
    // document.querySelector(".navbar").style.borderBottom = "1px solid lightgray";
    // document.querySelector(".navbar").style.top = "-50px";
    console.log("BBB")
  }
  prevScrollpos = currentScrollPos;
}

