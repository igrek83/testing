import BaseComponent from './BaseComponent';

export default class Slider extends BaseComponent {
  constructor(block) {
    super();
    this.block = block;
    this.counter = 0;
    this.lengthArray = Number(
      this.block.querySelectorAll('.slider__image').length
    );
    this.count = this.lengthArray;
    this.initialPoint = 0;
    this.finalPoint = 0;
    this.sliderItem = 0;
    this._setHandlers([
      {
        element: this.block.querySelector('#left'),
        event: 'click',
        callback: this._moveLeft.bind(this),
      },
      {
        element: this.block.querySelector('#right'),
        event: 'click',
        callback: this._moveRight.bind(this),
      },
      {
        element: this.block,
        event: 'touchstart',
        callback: this._touthStart.bind(this),
      },
      {
        element: this.block,
        event: 'touchend',
        callback: this._swipe.bind(this),
      },
    ]);
  }
  _moveRight() {
    if (this.counter === 0) {
      this.counter += 1;
      this.block.querySelector(
        '.slider__mini-block'
      ).style.transform = `translate(calc(-100% / ${this.lengthArray} * ${this.counter} * 2))`;
      return;
    }

    if (this.counter === this.lengthArray - 12) {
      this.counter = 0;
      this.block.querySelector(
        '.slider__mini-block'
      ).style.transform = `translate(calc(-100% * ${this.counter}))`;
      return;
    }

    this.counter += 1;
    this.block.querySelector(
      '.slider__mini-block'
    ).style.transform = `translate(calc(-100% / ${this.lengthArray} * ${this.counter} * 2))`;
  }
  _moveLeft() {
    if (this.counter === 0) {
      this.counter = 8;
      this.block.querySelector(
        '.slider__mini-block'
      ).style.transform = `translate(calc(-100% / ${this.lengthArray} * ${this.counter} * 2))`;
      return;
    }
    this.counter -= 1;
    this.block.querySelector(
      '.slider__mini-block'
    ).style.transform = `translate(calc(-100% / ${this.lengthArray} * ${this.counter} * 2))`;
    return;
  }
  _touthStart(event) {
    this.initialPoint = event.changedTouches[0];
  }
  _swipe(event) {
    this.finalPoint = event.changedTouches[0];
    let xAbs = Math.abs(this.initialPoint.pageX - this.finalPoint.pageX);
    if (xAbs > 120) {
      let x = 0;
      if (this.finalPoint.pageX < this.initialPoint.pageX) {
        if (this.sliderItem == this.lengthArray - 2) {
          return;
        }
        if (screen.width > 675) {
          x = -59.5 * this.sliderItem - 59.5 + 'vw';
        } else {
          x = -400 * this.sliderItem - 400 + 'px';
        }

        this.block.querySelector(
          '.slider__mini-block'
        ).style.webkitTransform = `translate(${x})`;
        this.sliderItem = this.sliderItem + 1;
      } else {
        if (this.sliderItem == -1) {
          return;
        }
        if (screen.width > 675) {
          x = -59.5 * this.sliderItem + 59.5 + 'vw';
        } else {
          x = -400 * this.sliderItem + 400 + 'px';
        }
        this.block.querySelector(
          '.slider__mini-block'
        ).style.webkitTransform = `translate(${x})`;
        this.sliderItem = this.sliderItem - 1;
      }
    } else {
      return;
    }
  }
}
