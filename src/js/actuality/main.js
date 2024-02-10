"use strict";
const containers = document.querySelectorAll(".containers");
containers === null || containers === void 0 ? void 0 : containers.forEach(container => {
    const chevron = container === null || container === void 0 ? void 0 : container.querySelector(".arrow-down");
    chevron === null || chevron === void 0 ? void 0 : chevron.addEventListener("click", function () {
        chevron.classList.toggle('clicked');
        const infoBody = container.querySelector('.info_body');
        if ((infoBody === null || infoBody === void 0 ? void 0 : infoBody.getAttribute('status')) === 'opened') {
            infoBody === null || infoBody === void 0 ? void 0 : infoBody.setAttribute('status', 'closed');
        }
        else {
            infoBody === null || infoBody === void 0 ? void 0 : infoBody.setAttribute('status', 'opened');
        }
    });
});
function toggleInfoBody() {
    const infoBody = document.querySelector('.info_body');
    infoBody === null || infoBody === void 0 ? void 0 : infoBody.classList.toggle('open');
}
