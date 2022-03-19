function showCatalogModal() {
    const btnBurger = document.querySelector('.burger');
    const ShowOverlayBurger = document.querySelector('.overlay-burger');
    const btnCloseModalCatalog = document.querySelector('.overlay-burger__button-close');
    btnBurger.addEventListener('click', () => {
        ShowOverlayBurger.style.display = 'block';
    })
    btnCloseModalCatalog.addEventListener('click', () => {
        ShowOverlayBurger.style.display = 'none';
    })

}

showCatalogModal()