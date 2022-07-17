export function fromFlatToTree (list, parent) {
  if (!parent) return {};
  const children = list.filter(x => x.pid === parent.id);
  children.forEach(child => fromFlatToTree(list, child));
  parent.children = children;
  return parent;
}
