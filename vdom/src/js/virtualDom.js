import Element from './Element.js'

function createElement(type, props, children) {
  return new Element(type, props, children);
}

function setAttrs(node, prop, value) {
  switch (prop) {
    case 'value':
      if (node.tagName === 'input' || node.tagName === 'TEXTAREA') {
        node.value = value;
      } else {
        node.setAttribute(prop, value);
      }
      break;
    case 'style':
      node.style.cssText = value;
      break;
    default:
      node.setAttribute(prop, value);
      break;
  }
}

function render(vDom) {
  const { type, props, children } = vDom;
  const el = document.createElement(type);
  console.log(el);
  for (let key in props) {
    setAttrs(el, key, props[key]);
  }
  children.map(c => {
    if (c instanceof Element) {
      c = render(c);
    } else {
      c = document.createTextNode(c);
    }
    el.appendChild(c);

  });
  return el;
}

function renderDOM(el, rootEl) {
  rootEl.appendChild(el);
}



export {
  createElement,
  render,
  setAttrs,
  renderDOM
}