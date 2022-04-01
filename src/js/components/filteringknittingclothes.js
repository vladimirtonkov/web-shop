import axios from 'axios';
import knitted from '../data/knitted';

const ArrKnitted = []
const arrProduct = [];
const filterArr = []
let arrSize = [];
let countCheckSize = 0;
let countUncheckSize = 0;


async function getData() {
    const catalogKnits = document.querySelector('.catalog-knits__items');
    const catalogShoes = document.querySelector('.catalog-shoes__items');

    if (catalogKnits) {
        try {
            const response = await axios.get('https://623cab3b7efb5abea6854ea5.mockapi.io/knitted-clothes');
            const data = response.data;
            ShowClothes(data)
        } catch (error) {
            document.querySelector('.site-container').style.display = 'none';
            document.querySelector('.error-title').style.display = 'block';
            throw new Error('Error: ', e);
        }

    }
    if (catalogShoes) {
        try {
            const response = await axios.get('https://623cab3b7efb5abea6854ea5.mockapi.io/shoes-clothes');
            const data = response.data;
            console.log('data shoes ', data)
            ShowClothes(data)
        } catch (error) {
            document.querySelector('.site-container').style.display = 'none';
            document.querySelector('.error-title').style.display = 'block';
            throw new Error('Error: ', e);
        }

    }

}


getData()

// async function getDataShoes() {

// }


function knittedClothes() {
    // const catalogKnits = document.querySelector('.catalog-knits__items');
    const inputColor = document.querySelectorAll('.color-input');
    const inputSize = document.querySelectorAll('.size-input');

    // const sizeItem = document.querySelector('.size-item');
    // const selectedFiltersTitle = document.querySelector('.selected-filters__title')



    // const currentInputCheckbox = document.querySelectorAll('.list__check-input')

    // ShowClothes(knitted)

    inputColor.forEach(elem => {
        elem.addEventListener('click', () => {
            filteringColorClothes(elem)
        })
    })

    inputSize.forEach(elem => {
        elem.addEventListener('click', () => {
            filteringSizeClothes(elem)
        })
    })



}



knittedClothes()


function filteringColorClothes(elem) {
    // const knittedItem = document.querySelectorAll('.knitted-item')
    // if (elem.checked) {
    //     // if (!ArrKnitted.length) {
    //     for (let i = 0; i < knitted.length; i++) {
    //         if (knitted[i].color === elem.name.toLowerCase()) {
    //             ArrKnitted.push(knitted[i])
    //         }
    //     }
    //     ShowClothes(ArrKnitted)
    // } else {
    //     for (let i = 0; i < ArrKnitted.length; i++) {
    //         if (ArrKnitted[i].color === elem.name.toLowerCase()) {
    //             ArrKnitted.splice(i, 1)
    //             i--;
    //         }
    //     }
    //     if (!ArrKnitted.length) {
    //         ShowClothes(knitted)
    //     } else {
    //         ShowClothes(ArrKnitted)
    //     }
    // }
}


const sizeProduct = []

function filteringSizeClothes(elem) {
    // const knittedItem = document.querySelectorAll('.knitted-item')
    // const inputColor = document.querySelectorAll('.color-input');
    // const inputSize = document.querySelectorAll('.size-input');

    // if (elem.checked) {
    //     inputColor.forEach((elem, i) => {
    //         if (elem.checked) {
    //             countCheckSize++
    //         }
    //     })
    //     if (!countCheckSize) {
    //         for (let i = 0; i < knitted.length; i++) {
    //             if (knitted[i].size === elem.name.toLowerCase()) {
    //                 ArrKnitted.push(knitted[i])
    //             }
    //         }
    //     } else {
    //         for (let i = 0; i < ArrKnitted.length; i++) {
    //             if (ArrKnitted[i].size === elem.name.toLowerCase()) {
    //                 sizeProduct.push(ArrKnitted[i])
    //             }
    //         }
    //         countCheckSize = 0;
    //     }
    //     ShowClothes(sizeProduct)

    //     if (!sizeProduct.length) {
    //         ShowClothes(ArrKnitted)
    //     }
    // } else {

    //     for (let i = 0; i < sizeProduct.length; i++) {
    //         if (sizeProduct[i].size === elem.name.toLowerCase()) {
    //             console.log('asd')
    //             sizeProduct.splice(i, 1)
    //             i--;
    //         }
    //     }

    //     inputSize.forEach((elem, i) => {
    //         if (elem.checked) {
    //             countUncheckSize++
    //         }
    //     })
    //     if (countUncheckSize) {
    //         countUncheckSize = 0;
    //         console.log('countUncheckSize ', countUncheckSize)
    //         if (!sizeProduct.length) {
    //             for (let i = 0; i < ArrKnitted.length; i++) {
    //                 if (ArrKnitted[i].size === elem.name.toLowerCase()) {
    //                     ArrKnitted.splice(i, 1)
    //                     i--;
    //                 }
    //             }
    //             ShowClothes(ArrKnitted)
    //         } else {
    //             ShowClothes(knitted)
    //         }
    //     } else {
    //         ShowClothes(knitted)
    //     }
    // }
}


function ShowClothes(products) {
    const catalogKnits = document.querySelector('.catalog-knits__items');
    const catalogShoes = document.querySelector('.catalog-shoes__items');

    if (catalogKnits) {
        catalogKnits.querySelectorAll('.clothes__item').forEach(item => {
            item.remove();
        })

        products.forEach(item => {
            catalogKnits.insertAdjacentHTML('beforeEnd',
                `
                <li class="clothes__item knitted-item hide" data-name-folder="productsImg/knits" data-id-product=${item.id}>
                <a class="clothes__box" href="product.html" >
                    <div class="clothes__content">
                        <img
                        class="clothes__img"
                        src=${item.img}
                        alt="shoe - Chunky Leather Tassle Loafers"
                        />
                    </div>
                    <div class="clothes__info">
                        <p class="clothes__name">${item.title}</p>
                        <span class="clothes__price">${item.price}</span>
                    </div>
                </a>
            </li>
            `)
        })
    }
    if (catalogShoes) {
        catalogShoes.querySelectorAll('.clothes__item').forEach(item => {
            item.remove();
        })
        products.forEach(item => {
            catalogShoes.insertAdjacentHTML('beforeEnd',
                `
                <li class="clothes__item shoes-item" data-name-folder="productsImg/shoes" data-id-product=${item.id}>
                    <a class="clothes__box" href="product.html">
                        <div class="clothes__content">
                            <img
                            class="clothes__img"
                            src=${item.img}
                            alt="shoe - Chunky Leather Tassle Loafers"
                            />
                            <img
                            class="clothes__img clothes__img--hover"
                            src=${item.imgHover}
                            alt="shoe - Chunky Leather Tassle Loafers"
                            />
                        </div>
                        <div class="clothes__info">
                            <p class="clothes__name">${item.title}</p>
                            <span class="clothes__price">${item.price}</span>
                        </div>
                    </a>
                </li>
            `)
        })
    }


}



