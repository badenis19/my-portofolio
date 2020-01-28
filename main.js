let burgerMenuButton = document.querySelector("#menuButton");
let menu = document.querySelector(".menu");

if (burgerMenuButton) {
    burgerMenuButton.addEventListener("click",(e) => {
        menu.classList.toggle("no-display")
    })
}