import vars from './_vars';
import './_components';
import knitted from './data/knitted'
import './components/showcatalogmodal'
import './components/authorize-registration-user'
import './components/filteringknittingclothes';
import './components/searchknitsclothes';
import './components/product';
// const fs = require('fs');






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










