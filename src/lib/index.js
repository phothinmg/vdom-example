/**
 * Create HTML element Vnode
 * @param {import("./types").TagNames} tag
 * @param {import("./types").CE} param1
 * @returns {import("./types").VNode}
 */
export function ce(tag, { attr, children }) {
  attr = attr ?? {};
  children = children ?? [];
  return { type: "element", tag, attr, children };
}
/**
 * Create VTextNode
 * @param {string} txt
 * @returns {import("./types").VTextNode}
 */
export function ctx(txt) {
  return {
    type: "text",
    value: txt,
  };
}
/**
 * Parse attritubies from generated vnode if it exits
 * @param {Element} el
 * @param {import("./types").Attr} [attr]
 */
function parseattr(el, attr) {
  attr = attr ?? {};
  const keys = Object.keys(attr);
  if (keys.length > 0) {
    keys.forEach((key) => {
      const val =
        key === "style"
          ? `${attr[key].join(";")};`
          : key === "class"
          ? attr[key].join(" ")
          : attr[key];
      el.setAttribute(key, val);
    });
  }
}

/**
 * Parse generated vnode
 * @param {import("./types").VNode} node
 */
function parseVnode(node) {
  const el = document.createElement(node.tag);
  parseattr(el, node.attr);
  if (node.children.length > 0) {
    for (const child of node.children) {
      el.appendChild(parseChildNode(child));
    }
  }
  return el;
}

/**
 * Parse children Vnode
 * @param {import("./types").VNode} node
 */
const parseChildNode = (vNode) => {
  if (vNode.type === "text") {
    return document.createTextNode(vNode.value);
  }
  return parseVnode(vNode);
};

/**
 * Render and mount the app
 * @param {import("./types").VNode} node
 * @param {Element} target
 */
export const render = (node, target) => {
  const app = parseVnode(node);
  target.replaceWith(app);
  return app;
};
