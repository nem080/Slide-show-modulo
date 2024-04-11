import Slide from './modulos/slide';

const slide = new Slide('.slide', '.slide-wrapper');
slide.init();
console.log(slide);

slide.changeSlide(3)