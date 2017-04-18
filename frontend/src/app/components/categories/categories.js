import angular from 'angular';
import categoriesComponent from './categories.component.js';

const CategoriesModule = angular.module('categories', [])
    .component('categories', categoriesComponent);

export default CategoriesModule;