import template from './save-bookmark.html';
import controller from './save-bookmark.controller';

let SaveBookmarkComponent = {
  bindings: {
    bookmark: '<',
    save: '&',
    cancel: '&'
  },
  template,
  controller,
  controllerAs: 'saveBookmarkCtrl'
};

export default SaveBookmarkComponent;