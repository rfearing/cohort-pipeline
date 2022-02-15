import { createElement, render } from 'components/helpers';

const AppDom = createElement('div',
  createElement('h1', ['Hello Sparkbox']),
  createElement('ul',
    createElement('ul',
      createElement('li', 'Item One'),
    ),
  ),
);


const renderDOM = () => {
  const container = document.getElementById('app');
  window.onload = function () {
    console.log('test');
    if (container) {
      render(AppDom, container);
    }
  }
}

export default renderDOM;
