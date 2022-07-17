export function fromTreeToFlat(tree, pid) {
  const result = [{id: tree.id, name: tree.name, pid: pid}];
  if (tree.children) {
    result.push(...tree.children.flatMap(child => fromTreeToFlat(child, tree.id)));
  }

  return result.sort(({id: aId}, {id: bId}) => aId - bId);
}
