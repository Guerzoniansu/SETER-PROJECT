"use strict";
// Main file for the travel folder
const t_menu_btn = document.querySelector('.content__section--burger');
const t_nav_bar = document.querySelector('.content__pages');
if (t_menu_btn) {
    t_menu_btn.addEventListener('click', function (event) {
        event.stopPropagation(); // Stop event propagation
        if (t_nav_bar) {
            t_nav_bar.classList.add("opened");
        }
    });
}
document.addEventListener("click", function (event) {
    const container = t_nav_bar === null || t_nav_bar === void 0 ? void 0 : t_nav_bar.querySelector(".container");
    if (container && container != event.target) {
        t_nav_bar === null || t_nav_bar === void 0 ? void 0 : t_nav_bar.classList.remove("opened");
    }
});
const ticket = document.querySelector('#choix_ticket');
ticket === null || ticket === void 0 ? void 0 : ticket.addEventListener('change', function () {
    var selectValue = this.value;
    const divToShow_1 = document.querySelector('#ticket_aller_simple');
    const divToShow_2 = document.querySelector('#forfait_10_tickets');
    const divToShow_3 = document.querySelector('#ticket_abonnement');
    const divToShow_4 = document.querySelector('#ticket_abonnement_jeune');
    const divToShow_5 = document.querySelector('#ticket_abonnement_enfant');
    // Affiche la div si l'option 2 est sélectionnée
    if (divToShow_1 && divToShow_2 && divToShow_3 && divToShow_4 && divToShow_5) {
        [divToShow_1, divToShow_2, divToShow_3, divToShow_4, divToShow_5].forEach(div => {
            div.style.display = 'none';
        });
        switch (selectValue) {
            case "1":
                divToShow_1.style.display = 'block';
                break;
            case "2":
                divToShow_2.style.display = 'block';
                break;
            case "3":
                divToShow_3.style.display = 'block';
                break;
            case "4":
                divToShow_4.style.display = 'block';
                break;
            case "5":
                divToShow_5.style.display = 'block';
                break;
            default:
                break;
        }
    }
});
const divItems = document.querySelectorAll('.ticket_forfait_options');
const bouton = document.querySelector('#boutton_ticket_b');
divItems === null || divItems === void 0 ? void 0 : divItems.forEach(div => {
    div.addEventListener('click', function () {
        // Supprimer la classe 'selected' de tous les autres div
        divItems.forEach(item => {
            if (item !== div) {
                item.classList.remove('selected');
            }
        });
        // Ajouter la classe 'selected' au div cliqué
        div.classList.toggle('selected');
        if (div.classList.contains('selected')) {
            bouton === null || bouton === void 0 ? void 0 : bouton.removeAttribute('disabled');
        }
        else {
            bouton === null || bouton === void 0 ? void 0 : bouton.setAttribute('disabled', 'true');
        }
    });
});
