import knitted from '../data/knitted';


function searchKnits() {
    const inputSearch = document.querySelector('.search-filter-knitting');
    const searchButton = document.querySelector('.search-filter-button');
    const knittedItem = document.querySelectorAll('.knitted-item');
    const searchItemsHint = document.querySelector('.items-hint');


    let word = '';
    let tmp = 0;
    let arrStr = []
    if (inputSearch) {
        inputSearch.addEventListener('input', (e) => {
            word = e.target.value.replace(/\s/g, '').toLowerCase();

            if (word.length) {
                if (word.length >= 3) {
                    searchItemsHint.style.display = 'block';
                    for (let k = 0; k < knitted.length; k++) {
                        let str = knitted[k].title.toLowerCase().split(' ')
                        for (let d = 0; d < str.length; d++) {
                            if (str[d].slice(0, word.length) === word) {
                                if (arrStr.indexOf(str[d]) === -1) {
                                    console.log('777777777777 ')
                                    arrStr.push(str[d])
                                    itemsHintSearch(str[d], str[d])

                                }
                            }
                        }
                    }
                    for (let i = 0; i < knitted.length; i++) {
                        let nameSearch = knitted[i].title.toLowerCase().split(' ');
                        if (arrStr.indexOf(nameSearch.join(' ')) === -1 && nameSearch.indexOf(word) > -1) {
                            console.log('8888888888')
                            arrStr.push(nameSearch.join(' '))
                            itemsHintSearch(nameSearch.join(' '), word)
                        }
                    }
                } else {
                    searchItemsHint.querySelectorAll('.items-hint__product').forEach(item => {
                        item.remove()
                    })

                    arrStr = []

                }




                const buttonSearch = document.querySelectorAll('.items-hint__button-search');
                buttonSearch.forEach(btn => {
                    btn.addEventListener('click', () => {
                        let parent = btn.parentElement;
                        console.log('111')
                        inputSearch.value = '';
                        inputSearch.value = parent.querySelector('.items-hint__title').textContent;
                        searchItemsHint.style.display = 'none';

                        let foundWord = parent.querySelector('.items-hint__title').textContent;

                        for (let i = 0; i < knitted.length; i++) {
                            let nameTitle = knitted[i].title.toLowerCase();
                            if (nameTitle.indexOf(foundWord) === -1) {
                                knittedItem[i].classList.add('hide-knitted-item')
                                // itemsHintSearch(nameTitle)
                            } else {
                                knittedItem[i].classList.remove('hide-knitted-item')
                            }
                        }


                        document.querySelector('.showing-results').style.display = 'block';
                        document.querySelector('.showing-results__subtitle').innerHTML = ` " ${"  " + foundWord} " `;
                        document.querySelector('.no-items').style.display = 'none'
                        document.querySelector('.btn-load-more').style.display = 'block';

                    })
                })



                searchButton.addEventListener('click', () => {
                    knittedItem.forEach(elem => {
                        elem.classList.remove('hide-knitted-item')
                    })
                    searchItemsHint.style.display = 'none';
                    console.log('inputValue ', inputSearch.value)
                    for (let i = 0; i < knitted.length; i++) {
                        let nameTitle = knitted[i].title.toLowerCase();
                        if (nameTitle.indexOf(inputSearch.value) === -1) {
                            knittedItem[i].classList.add('hide-knitted-item')
                        } else {
                            console.log(word)
                            knittedItem[i].classList.remove('hide-knitted-item')
                        }
                    }




                    knittedItem.forEach(elem => {
                        if (elem.closest('.hide-knitted-item')) {
                            tmp++;
                        }
                    })
                    console.log('tmp ', tmp)
                    if (tmp !== knittedItem.length) {
                        document.querySelector('.showing-results').style.display = 'block';
                        document.querySelector('.showing-results__subtitle').innerHTML = ` " ${"  " + inputSearch.value} " `;
                        document.querySelector('.no-items').style.display = 'none'
                        document.querySelector('.btn-load-more').style.display = 'block';
                        tmp = 0;
                    } else {
                        document.querySelector('.showing-results__subtitle').innerHTML = ` " ${"  " + inputSearch.value} " `;
                        document.querySelector('.showing-results').style.display = 'block';
                        document.querySelector('.no-items').style.display = 'block';
                        document.querySelector('.btn-load-more').style.display = 'none';
                        tmp = 0;
                    }
                })






            } else {
                searchItemsHint.style.display = 'none';
                document.querySelector('.showing-results').style.display = 'none';
            }
        })


    }

}


searchKnits()


function itemsHintSearch(nameProduct, insertedWord = '') {
    const searchItemsHint = document.querySelector('.items-hint');
    const inputSearch = document.querySelector('.search-filter-knitting');

    searchItemsHint.insertAdjacentHTML('beforeEnd',
        `
        <li class="items-hint__product">
            <span class="items-hint__title">${nameProduct.replace(insertedWord, '<b>' + insertedWord + '</b>')}</span>
            <button class="items-hint__button-search btn-reset">
                <img
                    class="items-hint__img-search"
                    src="../img/search.png"
                    alt=""
                />
            </button>
        </li>
    `
    )

}


