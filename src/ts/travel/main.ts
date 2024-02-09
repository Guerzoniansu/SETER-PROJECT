// Main file for the travel folder
const menu_btn = document.querySelector<HTMLDivElement>('.content__section--burger');
const nav_bar = document.querySelector<HTMLElement>('.content__pages');

if (menu_btn) {
    menu_btn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop event propagation
        if (nav_bar) {
            nav_bar.classList.add("opened");
        }
    })
}

document.addEventListener("click", function(event) {
    const container = nav_bar?.querySelector<HTMLDivElement>(".container")
    if (container && container != event.target) {
        nav_bar?.classList.remove("opened");
    }
});