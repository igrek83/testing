import './styles/index.scss';
import Slider from './js/Slider';
import Menu from './js/Menu';

const block = document.querySelector('.slider__box');
const menu = document.querySelector('.header__nav');

new Slider(block);
new Menu(menu);