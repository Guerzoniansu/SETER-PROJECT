"use strict";
// Main file for the travel folder
const h_menu_btn = document.querySelector('.content__section--burger');
const h_nav_bar = document.querySelector('.content__pages');
if (h_menu_btn) {
    h_menu_btn.addEventListener('click', function (event) {
        event.stopPropagation(); // Stop event propagation
        if (h_nav_bar) {
            h_nav_bar.classList.add("opened");
        }
    });
}
document.addEventListener("click", function (event) {
    const container = h_nav_bar === null || h_nav_bar === void 0 ? void 0 : h_nav_bar.querySelector(".container");
    if (container && container != event.target) {
        h_nav_bar === null || h_nav_bar === void 0 ? void 0 : h_nav_bar.classList.remove("opened");
    }
});
