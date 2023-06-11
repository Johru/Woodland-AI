interface MapData {
  clearingGridPositions: number[];
  clearingPaths: Array<[number, number]>;
  clearingRivers: Array<[number, number]>;
  doPathsSplitForests: boolean;
}

export const maps: Record<string, MapData> = {
  Autumn: {
    clearingGridPositions: [1, 2, 4, 16, 5, 6, 7, 8, 11, 13, 10, 14],
    // prettier-ignore
    clearingPaths: [[1, 2],[1, 5],[1, 6],[2, 4],[4, 6],[5, 13],[5, 9],[5, 10],[13, 10],[6, 10],[7, 16],[8, 16],[13,14],[10,11],[14,11],[10,7],[11,16],[4,8],[7,8]],
    // prettier-ignore
    clearingRivers: [[2, 6],[6, 7],[11, 7],[11, 13],],
    doPathsSplitForests: false,
  },
  Winter: {
    clearingGridPositions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11],
    // prettier-ignore
    clearingPaths: [[1, 2],[1, 5],[1, 6],[2, 3],[3, 6],[5, 9],[3, 4],[4, 8],[5, 9],[4, 7],[5, 6],[9, 10],[6, 10],[10, 15],[12, 15],[6, 15],[7, 12],[8, 12],],
    // prettier-ignore
    clearingRivers: [[2, 6],[6, 7],[15, 7],[15, 9],],
    doPathsSplitForests: true,
  },
};
