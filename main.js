/* ================= FOR THE BURGER MENU ON SMALLER SCREENS ================= */

let burgerMenuButton = document.querySelector("#menuButton");
let menu = document.querySelector(".menu");

if (burgerMenuButton) {
    burgerMenuButton.addEventListener("click", (e) => {
        menu.classList.toggle("no-display")
    })
}

/* ================= FOR THE NAVBAR TO APPEAR AND DISSAPEAR ================= */

let links_array = [...document.querySelectorAll(".links a")];

window.onscroll = function () {
    
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 5) {
        console.log(currentScrollPos)
        document.querySelector(".navbar").style.background = "none";
        document.querySelector(".navbar").style.borderBottom = "none";

        // for all the links to change color
        links_array.forEach((link) => {
            link.style.color = "white";
        })

    } else {
        console.log(currentScrollPos)
        links_array.forEach((link) => {
            link.style.color = "black";
        })

        document.querySelector(".navbar").style.background = "white";
    }
    prevScrollpos = currentScrollPos;
}

