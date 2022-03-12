import vars from './_vars';
import './_components';
import knitted from './data/knitted'
import './components/filteringknittingclothes';
import './components/searchknitsclothes';





const LENGTH_PASSWORD = 6;

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



function showModalAuth() {
    const btnShowAuth = document.querySelector('.shop-nav__item');
    const btnOverlayAuthorize = document.querySelector('.overlay-authorize');
    const btnNewCustomer = document.querySelector('.new-customer');
    const btnOverlayNewCustomer = document.querySelector('.overlay-new-customer');
    const btnSignIn = document.querySelector('.sign-in');
    const closeModalSignIn = document.querySelector('.sign-in-close')
    const closeModalNewCustomer = document.querySelector('.new-customer-close')

    btnShowAuth.addEventListener('click', () => {
        btnOverlayAuthorize.classList.remove('auth-active');
    })

    btnNewCustomer.addEventListener('click', (e) => {
        e.preventDefault();
        btnOverlayAuthorize.classList.add('auth-active');
        btnOverlayNewCustomer.classList.remove('auth-active')
    })

    btnSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        btnOverlayNewCustomer.classList.add('auth-active');
        btnOverlayAuthorize.classList.remove('auth-active');
    })

    closeModalSignIn.addEventListener('click', () => {
        btnOverlayAuthorize.classList.add('auth-active');
    })
    closeModalNewCustomer.addEventListener('click', () => {
        btnOverlayNewCustomer.classList.add('auth-active')
    })
}


showModalAuth()



function showPassword() {
    const checkPass = document.querySelector('.modal-authorize__button-check-password');
    const inputPass = document.querySelector('.modal-authorize__input-passowrd')

    console.log(checkPass.textContent.trim() === 'Show')
    checkPass.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkPass.textContent.trim() === 'Show' && inputPass.value.length !== 0) {
            inputPass.type = 'text';
            checkPass.innerHTML = 'Hide'
            checkPass.style.color = 'blue';
        } else if (checkPass.textContent.trim() === 'Hide' && inputPass.value.length !== 0) {
            inputPass.type = 'password';
            checkPass.innerHTML = 'Show'
            checkPass.style.color = 'black';
        }
    })
}

showPassword()


function completedSignIn() {
    const btnSignIn = document.querySelector('.modal-authorize__button-sign-in')
    const inputPass = document.querySelector('.modal-authorize__input-passowrd')
    const inputEmail = document.querySelector('.modal-authorize__input-email')
    const fillDataPass = document.querySelector('.modal-authorize__label-password span');
    const fillDataEmail = document.querySelector('.modal-authorize__label-email span')

    btnSignIn.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputPass.value.length === 0) {
            fillDataPass.innerHTML = 'Введите пароль'
            fillDataPass.style.color = 'red'
        } else if (inputPass.value.length >= 1 && inputPass.value.length < LENGTH_PASSWORD) {
            fillDataPass.innerHTML = 'Длина пароля должна быть больше шести символов'
            fillDataPass.style.color = 'red'
        } else {
            fillDataPass.innerHTML = 'Отлично'
            fillDataPass.style.color = 'green'
        }
        if (inputEmail.value.length === 0) {
            fillDataEmail.innerHTML = 'Введите почту'
            fillDataEmail.style.color = 'red'
        }
    })
}


completedSignIn()



function completedCreateAccount() {
    const btnCreateAcc = document.querySelector('.modal-new-customer__button-create-acc')
    const showRepPass = document.querySelector('.show-create-rep-pass')
    const inputRepPass = document.querySelector('.modal-new-customer__input-rep')
    const showPass = document.querySelector('.show-create-pass')
    const inputPass = document.querySelector('.modal-new-customer__input-passowrd')
    const inputEmail = document.querySelector('.modal-new-customer__input-email')

    const labelEmail = document.querySelector('.modal-new-customer__label-email span')
    const labelPass = document.querySelector('.modal-new-customer__label-password span')
    const labelRepPass = document.querySelector('.modal-new-customer__label-rep-pass span')

    btnCreateAcc.addEventListener('click', (e) => {
        e.preventDefault();
        if (inputEmail.value.length === 0) {
            labelEmail.innerHTML = 'Введите почту'
            labelEmail.style.color = 'red'
        }

        if (inputPass.value.length === 0) {
            labelPass.innerHTML = 'Введите пароль'
            labelPass.style.color = 'red'
        } else if (inputPass.value.length >= 1 && inputPass.value.length < LENGTH_PASSWORD) {
            labelPass.innerHTML = 'Длина пароля должна быть больше шести символов'
            labelPass.style.color = 'red'
        }

        if (inputRepPass.value.length === 0) {
            labelRepPass.innerHTML = 'Введите пароль'
            labelRepPass.style.color = 'red'
        } else if (inputRepPass.value.length >= 1 && inputRepPass.value.length < LENGTH_PASSWORD) {
            labelRepPass.innerHTML = 'Длина пароля должна быть больше шести символов'
            labelRepPass.style.color = 'red'
        }

        if (inputPass.value.length > 6 && inputRepPass.value.length > 6) {
            if (inputPass.value.trim() !== inputRepPass.value.trim()) {
                labelPass.innerHTML = 'Пароли не совпадают'
                labelPass.style.color = 'red'
                labelPass.style.textDecoration = 'underline'
                labelRepPass.innerHTML = 'Пароли не совпадают'
                labelRepPass.style.color = 'red'
                labelRepPass.style.textDecoration = 'underline'
            }
        }

    })

    showPass.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputPass.value.length > 0 && showPass.textContent.trim() === 'Show') {
            inputPass.type = 'text'
            showPass.innerHTML = 'Hide'
            labelPass.innerHTML = ''
        } else if (inputPass.value.length > 0 && showPass.textContent.trim() === 'Hide') {
            inputPass.type = 'password'
            showPass.innerHTML = 'Show'
            labelPass.innerHTML = ''
        } else {
            labelPass.innerHTML = 'Введите пароль'
        }
    })


    showRepPass.addEventListener('click', (e) => {
        e.preventDefault()
        if (inputRepPass.value.length > 0 && showRepPass.textContent.trim() === 'Show') {
            inputRepPass.type = 'text'
            showRepPass.innerHTML = 'Hide'
            labelRepPass.innerHTML = ''
        } else if (inputRepPass.value.length > 0 && showRepPass.textContent.trim() === 'Hide') {
            inputRepPass.type = 'password'
            showRepPass.innerHTML = 'Show'
            labelRepPass.innerHTML = ''
        } else {
            labelRepPass.innerHTML = 'Введите пароль'
        }
    })
}


completedCreateAccount()





function breadcrumbsFilter() {
    const sizeItem = document.querySelector('.size-item');
    const colorItem = document.querySelector('.color-item');
    const designedItem = document.querySelector('.designed-item');


    const color = document.querySelector('.color');
    const designed = document.querySelector('.designed');
    const size = document.querySelector('.size');

    if (colorItem) {
        colorItem.addEventListener('click', () => {
            if (color.closest('.color-lists')) {
                color.classList.remove('color-lists')
                colorItem.querySelector('.breadcrumbs__arrow-down').style.transform = 'rotate(180deg)';
            } else {
                color.classList.add('color-lists')
                colorItem.querySelector('.breadcrumbs__arrow-down').style.transform = 'rotate(0deg)';
            }

            size.classList.add('size-lists')
        })
    }

    if (designedItem) {
        designedItem.addEventListener('click', () => {
            if (designed.closest('.designed-lists')) {
                designed.classList.remove('designed-lists')
                designedItem.querySelector('.breadcrumbs__arrow-down').style.transform = 'rotate(180deg)';
            } else {
                designed.classList.add('designed-lists')
                designedItem.querySelector('.breadcrumbs__arrow-down').style.transform = 'rotate(0deg)';
            }
            designed.classList.add('size-lists')
        })
    }

    if (sizeItem) {
        sizeItem.addEventListener('click', () => {
            if (size.closest('.size-lists')) {
                size.classList.remove('size-lists')
                sizeItem.querySelector('.breadcrumbs__arrow-down').style.transform = 'rotate(180deg)';
            } else {
                size.classList.add('size-lists')
                sizeItem.querySelector('.breadcrumbs__arrow-down').style.transform = 'rotate(0deg)';
            }

            color.classList.add('color-lists')
        })
    }



}


breadcrumbsFilter()








