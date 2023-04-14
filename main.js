let open = false;

function openMenu() {
    const menu = document.getElementById("menu");
    if (open) {
        menu.style.display = "none";
        open = false;
    } else {
        menu.style.display = "block";
        open = true;
    }
}