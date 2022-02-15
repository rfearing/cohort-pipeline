// Why not do it the hard way?
// Let's make a crappy react:

type ELEMENT = string | CREATE_EL ;

type NODE = {
  type: string;
  children: ELEMENT | ELEMENT[];
}

type CREATE_EL = (type: string, ...children: any ) => NODE;

const renderNode = (node: NODE) => {
  const { type, children } = node;
  const element = document.createElement(type);

  if (! Array.isArray(children)) {
    document.createTextNode(children as string);
  } else {
    children.forEach((child: ELEMENT) => {
      if (typeof child === 'string') {
        document.createTextNode(child);
      } else {
        // @ts-expect-error
        element.appendChild(renderNode(child));
      }
    });
  }

  return element;
};

export const createElement: CREATE_EL = (type, ...children) => {
  return { type, children };
};

export const render = (node: NODE, element: Node | HTMLElement) => {
  if (node && element) {
    element.appendChild(renderNode(node));
  }
};

class Component {
	constructor() {
		this.state = {};
	}

	state;

	setState(partialState: {}) {
		Object.assign(this.state, partialState);
	}
}

