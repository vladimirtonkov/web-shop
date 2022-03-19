import knitted from '../data/knitted'




CompletelyShowCurrentKnittedProd()

let arrProductStorage = []
function CompletelyShowCurrentKnittedProd() {
    const products = document.querySelectorAll('.knitted-item');
    products.forEach(product => {
        product.addEventListener('click', () => {
            console.log(parent)
            let dataId = product.dataset.idProduct
            let nameFolder = product.dataset.nameFolder
            for (let i = 0; i < knitted.length; i++) {
                if (knitted[i].id === dataId && arrProductStorage.indexOf(knitted[i].id - 1) === -1) {
                    localStorage.setItem(`productId`, knitted[i].id - 1)
                }
            }
        })
    })
}





// window.onload = function () {
let arrLiElements = []
function showKnittedProductCurrentId() {
    const productImgUl = document.querySelector('.product__images');
    const boxImg = document.querySelector('.product__box-img')
    const nameProduct = document.querySelector('.product-descr__name');
    const priceProduct = document.querySelector('.product-descr__price')
    const productId = localStorage.getItem('productId')
    if (productImgUl && productId) {

        // if (knitted[productId].moreImagesProduct) {
        // knitted[productId].forEach(item => {
        nameProduct.innerHTML = knitted[productId].title;
        priceProduct.innerHTML = knitted[productId].price;
        knitted[productId].moreImagesProduct.forEach((image, index) => {
            let imgCreate = document.createElement('img')
            imgCreate.src = image
            imgCreate.onload = () => {
                if (index <= 1) {
                    productImgUl.insertAdjacentHTML('beforeEnd', `
                                    <li class="product__item-img " >
                                        <img
                                        class="product__img"
                                        src=${image}
                                        alt=""
                                        />
                                    </li>
                                `
                    )
                }
                else {
                    productImgUl.insertAdjacentHTML('beforeEnd',
                        `
                                            <li class="product__item-img hide-img">
                                                <img
                                                class="product__img"
                                                src=${image}
                                                alt=""
                                                />
                                            </li>
                                        `
                    )
                }
            }
            // })
        })
    }
}
// }

showKnittedProductCurrentId()
// }



// })



window.onload = () => {
    function sliderImgCurrentProduct() {
        const productsImg = document.querySelectorAll('.product__item-img ');
        const productBtnRight = document.querySelector('.product__btn-right');
        const productBtnLeft = document.querySelector('.product__btn-left');
        let prevElement = 0;
        let indexShowsOneImage = 0

        let CurrIndexShowsTwoImage = 0;
        let NextIndexShowsTwoImage = 1;

        productBtnRight.addEventListener('click', () => {
            NextIndexShowsTwoImage += 1;
            if (NextIndexShowsTwoImage < productsImg.length) {
                productsImg[NextIndexShowsTwoImage].classList.remove('hide-img');
            } else if (NextIndexShowsTwoImage === productsImg.length) {
                NextIndexShowsTwoImage = 0;
                productsImg[NextIndexShowsTwoImage].classList.remove('hide-img');
            }

            if (CurrIndexShowsTwoImage < productsImg.length) {
                productsImg[CurrIndexShowsTwoImage].classList.add('hide-img');
                CurrIndexShowsTwoImage += 1;

            } else if (CurrIndexShowsTwoImage === productsImg.length) {
                CurrIndexShowsTwoImage = 0;
                productsImg[CurrIndexShowsTwoImage].classList.add('hide-img');
                CurrIndexShowsTwoImage += 1;
            }
        })

        productBtnLeft.addEventListener('click', () => {
            if (CurrIndexShowsTwoImage === 0) {
                if (window.innerWidth <= 765) {
                    productsImg[CurrIndexShowsTwoImage].classList.add('hide-img');
                    CurrIndexShowsTwoImage = productsImg.length - 1;
                    productsImg[CurrIndexShowsTwoImage].classList.remove('hide-img');

                } else {
                    CurrIndexShowsTwoImage = productsImg.length - 1;
                    productsImg[CurrIndexShowsTwoImage].classList.remove('hide-img');
                }
            } else {
                CurrIndexShowsTwoImage -= 1;
                productsImg[CurrIndexShowsTwoImage].classList.remove('hide-img');
            }

            if (NextIndexShowsTwoImage === 0) {
                productsImg[NextIndexShowsTwoImage].classList.add('hide-img');
                NextIndexShowsTwoImage = productsImg.length - 1;
            } else {
                productsImg[NextIndexShowsTwoImage].classList.add('hide-img');
                NextIndexShowsTwoImage -= 1;
            }
        })


    }
    sliderImgCurrentProduct()
}