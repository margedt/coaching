const hamb = document.querySelector(".hamburger");
// const menu = document.querySelector(".menu");
let open = true;

function openMenu() {
const menu = document.getElementsByClassName("menu");
    if (open) {
        console.log(menu)
        menu.style.display = "none";
        open = false;
    } else if (!open) {
        menu.style.display = "block";
        open = true;
    }
}