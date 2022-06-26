document.addEventListener('DOMContentLoaded', () => {
    const iconMenu = document.querySelector('#iconMenu');
    const iconCloseMenu = document.querySelector('#iconCloseMenu');

    iconMenu.addEventListener('click', () => {
        iconMenu.style.display = "none";
        iconCloseMenu.style.display = "block";
    })

    iconCloseMenu.addEventListener('click', () => {
        iconCloseMenu.style.display = "none";
        iconMenu.style.display = "block"
    })
})