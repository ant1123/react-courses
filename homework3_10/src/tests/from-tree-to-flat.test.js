import {fromTreeToFlat} from "../functions/from-tree-to-flat";
import {NFS_MW_CITY_DISTRICTS, NFS_MW_CITY_DISTRICTS_TREE} from "./mock-data.js";

describe("from tree to flat", () => {
  it('should return array object that represents correct relation between instances of cities', () => {
    expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 0)).toEqual(NFS_MW_CITY_DISTRICTS);
  });

  it('should not throw error or return null if null value is sent as pid', () => {
    expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, null)).toBeDefined();
  });

  it('should return array with one value in case of empty tree', () => {
    expect(fromTreeToFlat([], 0)).toHaveLength(1);
  });

  it('should return array with the same length in case of not root pid ', () => {
    expect(fromTreeToFlat(NFS_MW_CITY_DISTRICTS_TREE, 2)).toHaveLength(18);
  });

  it('should throw error if null tree is set', () => {
    expect(() => fromTreeToFlat(null, 0)).toThrow(TypeError);
  });
});