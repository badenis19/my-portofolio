let burgerMenuButton = document.querySelector("#menuButton");

let menu = document.querySelector(".menu");

if (burgerMenuButton) {
    burgerMenuButton.addEventListener("click",(e) => {
        console.log("OK");
        menu.classList.toggle("no-display")
        
    })
}