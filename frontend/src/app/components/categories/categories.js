import angular from 'angular';
import categoriesComponent from './categories.component.js';
import CategoriesItemModule from './category-item/category-item';

const CategoriesModule = angular.module('categories', [
        CategoriesItemModule.name
    ])
    .component('categories', categoriesComponent);

export default CategoriesModule;