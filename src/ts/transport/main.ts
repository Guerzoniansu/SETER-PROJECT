// Main file for the travel folder
const t_menu_btn = document.querySelector<HTMLDivElement>('.content__section--burger');
const t_nav_bar = document.querySelector<HTMLElement>('.content__pages');

if (t_menu_btn) {
    t_menu_btn.addEventListener('click', function(event) {
        event.stopPropagation(); // Stop event propagation
        if (t_nav_bar) {
            t_nav_bar.classList.add("opened");
        }
    })
}

document.addEventListener("click", function(event) {
    const container = t_nav_bar?.querySelector<HTMLDivElement>(".container")
    if (container && container != event.target) {
        t_nav_bar?.classList.remove("opened");
    }
});

const ticket = document.querySelector<HTMLSelectElement>('#choix_ticket')

ticket?.addEventListener('change', function() {
    var selectValue = this.value;
    const divToShow_1 = document.querySelector<HTMLDivElement>('#ticket_aller_simple');
    const divToShow_2 = document.querySelector<HTMLDivElement>('#forfait_10_tickets');
    const divToShow_3 = document.querySelector<HTMLDivElement>('#ticket_abonnement');
    const divToShow_4 = document.querySelector<HTMLDivElement>('#ticket_abonnement_jeune');
    const divToShow_5 = document.querySelector<HTMLDivElement>('#ticket_abonnement_enfant');

    // Affiche la div si l'option 2 est sélectionnée
    if (divToShow_1 && divToShow_2 && divToShow_3 && divToShow_4 && divToShow_5) {
        [divToShow_1, divToShow_2, divToShow_3, divToShow_4, divToShow_5].forEach(div => {
            div.style.display = 'none';
        })
        
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

const divItems = document.querySelectorAll<HTMLDivElement>('.ticket_forfait_options');
const bouton = document.querySelector<HTMLButtonElement>('#boutton_ticket_b');

divItems?.forEach(div => {
    div.addEventListener('click', function() {
        // Supprimer la classe 'selected' de tous les autres div
        divItems.forEach(item => {
            if (item !== div) {
                item.classList.remove('selected');
            }
        });
        // Ajouter la classe 'selected' au div cliqué
        div.classList.toggle('selected');
        if (div.classList.contains('selected')) {
            bouton?.removeAttribute('disabled');
        }
        else {
            bouton?.setAttribute('disabled', 'true');
        }
    });
});

