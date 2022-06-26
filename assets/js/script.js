document.addEventListener('DOMContentLoaded', () => {
    const iconMenu = document.querySelector('#iconMenu');
    const iconCloseMenu = document.querySelector('#iconCloseMenu');
    const menuCollapseSection = document.querySelector('#menuCollapseSection');

    iconMenu.addEventListener('click', () => {
        menuCollapseSection.style.display = "block"
    })

    iconCloseMenu.addEventListener('click', () => {
        menuCollapseSection.style.display = "none";
        // iconMenu.style.display = "block"
    })
})