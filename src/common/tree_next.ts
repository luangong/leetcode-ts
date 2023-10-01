export default class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val);
    this.left = left ?? null;
    this.right = right ?? null;
    this.next = next ?? null;
  }
}
