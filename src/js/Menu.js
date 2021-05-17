import BaseComponent from './BaseComponent';

export default class Menu extends BaseComponent {
  constructor(block) {
    super();
    this.block = block;
    this._setHandlers([
      {
        element: this.block,
        event: 'click',
        callback: this._onClick.bind(this),
      },
    ]);
  }
  _onClick(event) {
    if (event.target.closest('.header__li')) {
      if (event.target.classList.contains('header__li-active')) {
        return;
      } else {
        const arr = document.querySelectorAll('.header__li');
        arr.forEach((item) => {
          item.classList.remove('header__li-active');
        });
        event.target.closest('.header__li').classList.add('header__li-active');
      }
    }
  }
}
