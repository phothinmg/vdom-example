export type TagNames = keyof HTMLElementTagNameMap;
export interface Attr {
  [x: string]: any;
  style?: string[];
  class?: string[];
  width?: string;
  height?: string;
  id?: string;
  src?: string;
  href?: string;
}
export type CE = {
  attr?: Attr;
  children?: Array<VTextNode | VNode>;
};
export type VTextNode = {
  type: "text";
  value: string;
};
export interface VNode {
  type: "element";
  tag: keyof HTMLElementTagNameMap;
  attr?: Attr;
  children?: Array<VTextNode | VNode>;
}
