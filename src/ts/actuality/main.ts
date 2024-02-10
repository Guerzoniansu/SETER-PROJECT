const containers = document.querySelectorAll<HTMLDivElement>(".containers");
containers?.forEach(container => {
    const chevron = container?.querySelector<HTMLDivElement>(".arrow-down");
    chevron?.addEventListener("click", function() {
        chevron.classList.toggle('clicked');
        const infoBody = container.querySelector<HTMLDivElement>('.info_body');
        if (infoBody?.getAttribute('status') === 'opened') {
            infoBody?.setAttribute('status', 'closed');
        }
        else
        {
            infoBody?.setAttribute('status', 'opened');
        }
    })
});



function toggleInfoBody() {
    const infoBody = document.querySelector('.info_body');
    infoBody?.classList.toggle('open');
}