import template from './category-item.html';
import './category-item.styl';

let CategoryItemComponent = {
  bindings: {
    category: '<',
    selected: '&'
  },
  template,
  controllerAs: 'categoryItemCtrl'
};

export default CategoryItemComponent;