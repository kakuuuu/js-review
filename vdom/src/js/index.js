import { createElement, render, renderDOM } from './virtualDom.js';

const vDom = createElement('div', {
  class: 'my-div-1'
}, ["我是子集1", "我是子集2", "我是子集3", createElement('div', {
  class: 'my-div-2'
}, ["我是子集2-1", "我是子集2-2", "我是子集2-3"], "test222")], "test222");
const rDom = render(vDom);
renderDOM(rDom, document.getElementById('app'));
console.log(rDom);
console.log(vDom);