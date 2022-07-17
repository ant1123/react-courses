import {fromFlatToTree} from "../functions/from-flat-to-tree";
import {NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS_TREE} from "./mock-data.js";

describe("from flat to tree", () => {
  it('should return object that represents correct relation between instances of cities', () => {
    expect(fromFlatToTree(NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS[0])).toEqual(NFS_MW_CITY_DISTRICTS_TREE);
  });

  it('should return correct tree object that represents not root component', () => {
    expect(fromFlatToTree(NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS[1])).toEqual(NFS_MW_CITY_DISTRICTS_TREE.children[0]);
  });

  it('should return correct object for tree leaf', () => {
    expect(fromFlatToTree(NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS[4])).toEqual(NFS_MW_CITY_DISTRICTS_TREE.children[0].children[0]);
  });

  it('should return empty object if parent component is null', () => {
    expect(fromFlatToTree(NFS_MW_CITY_DISTRICTS, null)).toEqual({});
  });

  it('should return parent component if parent component is absent in array', () => {
    const incorrectRoot = {id: 20, pid: 50, name: "Cairo"};
    expect(fromFlatToTree(NFS_MW_CITY_DISTRICTS, incorrectRoot)).toEqual(incorrectRoot);
  });
});
