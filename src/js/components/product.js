
// import knitted from '../data/knitted'
import axios from 'axios'

let knitted = []


async function getData() {
    const KnitsItemUl = document.querySelector('.catalog-knits__items');
    const ShoesItemUl = document.querySelector('.catalog-shoes__items')
    console.log('KnitsItemUl ', KnitsItemUl);
    console.log('ShoesItemUl ', ShoesItemUl)
    if (KnitsItemUl) {
        console.log('1')
        const response = await axios.get('https://623cab3b7efb5abea6854ea5.mockapi.io/knitted-clothes');
        const data = response.data;
        // knitted = data;
        localStorage.setItem('arrProduct', JSON.stringify(data))
        knitted = JSON.parse(localStorage.getItem('arrProduct'))

    }
    if (ShoesItemUl) {
        console.log('3')
        const response = await axios.get('https://623cab3b7efb5abea6854ea5.mockapi.io/shoes-clothes');
        const data = response.data;
        // knitted = data;
        localStorage.setItem('arrProduct', JSON.stringify(data))
        knitted = JSON.parse(localStorage.getItem('arrProduct'))
    }
}
getData()



// window.onload = () => {
setTimeout(() => {


    CompletelyShowCurrentKnittedProd()

    let arrProductStorage = []
    function CompletelyShowCurrentKnittedProd() {
        const products = document.querySelectorAll('.knitted-item');
        const shoesItem = document.querySelectorAll('.shoes-item')
        knitted = JSON.parse(localStorage.getItem('arrProduct'))
        console.log('products ', products)
        console.log('shoesItem ', shoesItem)
        if (products.length > 0) {
            console.log('if knitted', knitted)
            products.forEach(product => {
                product.addEventListener('click', () => {
                    console.log('product click')
                    let dataId = product.dataset.idProduct
                    let nameFolder = product.dataset.nameFolder
                    for (let i = 0; i < knitted.length; i++) {
                        console.log('knitted[i].id ', knitted[i].id)
                        console.log('dataId ', dataId)
                        console.log('knitted[i].id === dataId', knitted[i].id === dataId)
                        if (+knitted[i].id === +dataId && arrProductStorage.indexOf(knitted[i].id - 1) === -1) {
                            localStorage.setItem("productId", knitted[i].id - 1)
                        }
                    }
                })
            })
        }
        if (shoesItem.length > 0) {
            console.log('shoes item')
            shoesItem.forEach(item => {
                item.addEventListener('click', () => {
                    let dataId = item.dataset.idProduct
                    console.log('knitted item ', knitted)
                    let nameFolder = item.dataset.nameFolder
                    for (let i = 0; i < knitted.length; i++) {
                        if (+knitted[i].id === +dataId && arrProductStorage.indexOf(knitted[i].id - 1) === -1) {
                            localStorage.setItem("productId", knitted[i].id - 1)
                        }
                    }
                })
            })
        }

    }


    function showKnittedProductCurrentId() {
        const productImgUl = document.querySelector('.product__images');
        const boxImg = document.querySelector('.product__box-img')
        const nameProduct = document.querySelector('.product-descr__name');
        const priceProduct = document.querySelector('.product-descr__price')
        const productId = localStorage.getItem('productId');
        const sizeList = document.querySelector('.size-box');
        const colorProduct = document.querySelector('.product-descr__name-color');
        const colorList = document.querySelector('.product-descr__color-items');

        knitted = JSON.parse(localStorage.getItem('arrProduct'))

        if (productImgUl) {
            if (knitted[productId]) {
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
                })

                nameProduct.innerHTML = knitted[productId].title;
                priceProduct.innerHTML = knitted[productId].price;
                localStorage.setItem('colorProduct', knitted[productId].color[0].toUpperCase() + knitted[productId].color.substr(1));
                colorProduct.innerHTML = localStorage.getItem('colorProduct')
            }
        }


        console.log(knitted[productId])
        if (knitted[productId]) {
            knitted[productId].availableSizes.forEach(size => {
                console.log(size)
                if (sizeList) {
                    sizeList.insertAdjacentHTML('beforeEnd', `
                    <li class="size-box__item">
                        <span class="size-box__num">${size}</span>
                    </li>
                    `)
                }

            })
            if (colorList) {
                for (let color in knitted[productId].colorList) {
                    console.log('color ', color)
                    let strList = color.replace(/\s/g, '').toLowerCase();
                    let knittedColor = knitted[productId].color.replace(/\s/g, '').toLowerCase();
                    let img = document.createElement('img');
                    img.src = knitted[productId].colorList[color]
                    console.log('knitted[productId].colorList[color] ', knitted[productId].colorList[color])
                    img.onload = () => {
                        if (strList === knittedColor) {
                            colorList.insertAdjacentHTML('beforeEnd', `
                        <li class="product-descr__color-item active-color" data-color=${color}>
                            <img src=${img.src} alt="" />
                        </li>
                    `)

                        } else {
                            colorList.insertAdjacentHTML('beforeEnd', `
                        <li class="product-descr__color-item" data-color=${color}>
                            <img src=${img.src} alt="" />
                        </li>
                    `)
                        }
                    }
                }
            }
        }


        // }

    }

    showKnittedProductCurrentId()



    function ColorClothesMouseEvent() {
        const colors = document.querySelectorAll('.product-descr__color-item');
        const colorProduct = document.querySelector('.product-descr__name-color');
        const productId = localStorage.getItem('productId');



        colors.forEach(color => {
            color.addEventListener('mouseover', () => {
                colorProduct.innerHTML = color.dataset.color;
            }, false)
            color.addEventListener('mouseout', () => {
                // colorProduct.innerHTML = knitted[productId].color[0].toUpperCase() + knitted[productId].color.substr(1);
                colorProduct.innerHTML = localStorage.getItem('colorProduct');
            }, false)


            color.addEventListener('click', () => {
                colors.forEach(color => {
                    color.classList.remove('active-color')
                })
                color.classList.add('active-color')
                localStorage.setItem('colorProduct', color.dataset.color)
                colorProduct.innerHTML = localStorage.getItem('colorProduct');
            })

        })


        colors.forEach(color => {
            if (color.closest('.active-color')) {
                colorProduct.innerHTML = color.dataset.color;
            }
        })
    }

    ColorClothesMouseEvent()



    function addClothesToСart() {
        const addToShoppingCard = document.querySelector('.product-descr__button-add-bag');
        const sizeList = document.querySelectorAll('.size-box__item');
        const sizeBox = document.querySelector('.size-box');
        const productColor = document.querySelectorAll('.product-descr__color-item')
        const productName = document.querySelector('.product-descr__name');
        const productPrice = document.querySelector('.product-descr__price');

        let chosenСlothing;
        let chosenСolorImg;
        let chosenSize;

        if (addToShoppingCard) {
            addToShoppingCard.addEventListener('click', () => {
                productColor.forEach(color => {
                    if (color.closest('.active-color')) {
                        chosenСlothing = color;
                        chosenСolorImg = chosenСlothing.querySelector('img')
                    }
                })

                let count = 0;
                sizeList.forEach(size => {
                    if (!size.closest('.active-size')) {
                        size.style.opacity = '0.7';
                        count++;
                    } else {
                        chosenSize = size.querySelector('.size-box__num')
                    }
                })

                if (count >= sizeList.length) {
                    sizeBox.style.marginBottom = '20px';
                    document.querySelector('.product-descr__select-size').innerHTML = 'Необходимо выбрать один из размеров';
                    sizeList.forEach(size => {
                        size.style.border = '2px solid red';
                    })
                } else {
                    sizeBox.style.marginBottom = '50px';
                    document.querySelector('.product-descr__select-size').innerHTML = '';
                    count = 0;

                    addToShoppingCard.style.backgroundColor = 'gray';
                    addToShoppingCard.style.cursor = 'not-allowed';
                    document.querySelector('.pop-up_basket__img').src = chosenСolorImg.getAttribute('src');
                    document.querySelector('.pop-up_basket__name-product').innerHTML = productName.textContent;
                    document.querySelector('.pop-up_basket__price-product').innerHTML = productPrice.textContent;
                    document.querySelector('.pop-up_basket__quantity-product span').innerHTML = 1;
                    document.querySelector('.pop-up_basket__color-product span').innerHTML = chosenСlothing.dataset.color;
                    document.querySelector('.pop-up_basket__size-product span').innerHTML = chosenSize.textContent;

                    document.querySelector('.product-descr__modal-pop-up_basket').classList.add('show-product-basket');
                    console.log('aaaaaa', document.querySelector('.product-descr__modal-pop-up_basket').getBoundingClientRect().bottom)
                    window.scrollBy(0, document.querySelector('.product-descr__modal-pop-up_basket').getBoundingClientRect().top);
                    window.setTimeout(() => {
                        document.querySelector('.product-descr__modal-pop-up_basket').classList.remove('show-product-basket');
                        addToShoppingCard.style.backgroundColor = 'black';
                        addToShoppingCard.style.cursor = 'pointer';
                    }, 3500)
                }

            })
        }

    }


    addClothesToСart()



    function selectSize() {
        const sizeList = document.querySelectorAll('.size-box__item');
        sizeList.forEach(size => {
            size.addEventListener('click', () => {
                sizeList.forEach(item => {
                    item.classList.remove('active-size')
                })
                size.classList.add('active-size')

                document.querySelector('.product-descr__select-size').innerHTML = '';
                sizeList.forEach(size => {
                    size.style.border = '';
                })
                console.log(sizeList)
                sizeList.forEach(size => {
                    if (!size.closest('.active-size')) {
                        size.style.opacity = '0.5';
                    } else {
                        size.style.opacity = '1';
                    }
                })
            })
        })
    }


    selectSize()

    setTimeout(() => {
        document.querySelectorAll('.clothes__item').forEach(item => {
            item.style.display = 'block'
        })
        if (document.querySelector('.current-product')) {
            document.querySelector('.current-product').style.display = 'block';
        }

        function sliderImgCurrentProduct() {
            const productsImg = document.querySelectorAll('.product__item-img');
            const productBtnRight = document.querySelector('.product__btn-right');
            const productBtnLeft = document.querySelector('.product__btn-left');

            let CurrIndexShowsTwoImage = 0;
            let NextIndexShowsTwoImage = 1;

            if (productBtnRight) {

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

            }

            if (productBtnLeft) {
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

        }
        sliderImgCurrentProduct()
    }, 1200)



}, 1000)


// }


function HoverOverTheCartShowMiniBsket() {
    const basket = document.querySelector('.logo-shop-cart');
    const miniCart = document.querySelector('.mini-cart')
    basket.addEventListener('mouseover', () => {
        document.querySelector('.mini-cart').style.display = 'block';
        document.querySelector('.main').style.filter = 'blur(4px)';
    }, false)

    basket.addEventListener('mouseout', () => {
        document.querySelector('.mini-cart').style.display = 'none';
        document.querySelector('.main').style.filter = 'blur(0px)';
    }, false)

    miniCart.addEventListener('mouseover', () => {
        document.querySelector('.mini-cart').style.display = 'block';
        document.querySelector('.main').style.filter = 'blur(4px)';
    })

    miniCart.addEventListener('mouseout', () => {
        document.querySelector('.mini-cart').style.display = 'none';
        document.querySelector('.main').style.filter = 'blur(0px)';
    })

}

HoverOverTheCartShowMiniBsket()