export const NFS_MW_CITY_DISTRICTS = [
  {id: 1, pid: 0, name: "Rockport City"},
  {id: 2, pid: 1, name: "Rosewood"},
  {id: 3, pid: 1, name: "Kadmen Beach"},
  {id: 4, pid: 1, name: "Downtown Rockport"},
  {id: 5, pid: 2, name: "Downtown Rosewood"},
  {id: 6, pid: 2, name: "Heritage Heights"},
  {id: 7, pid: 2, name: "Petersburg"},
  {id: 8, pid: 2, name: "Rosewood College Campus"},
  {id: 9, pid: 2, name: "Highlander Stadium"},
  {id: 10, pid: 2, name: "Hickley Field"},
  {id: 11, pid: 2, name: "Highway 99"},
  {id: 12, pid: 3, name: "North Gray Point"},
  {id: 13, pid: 3, name: "Ocean Hills"},
  {id: 14, pid: 3, name: "Point Camden"},
  {id: 15, pid: 4, name: "Agostini Heights"},
  {id: 16, pid: 4, name: "Century Square"},
  {id: 17, pid: 4, name: "Riverfront Stadium"},
  {id: 18, pid: 4, name: "Rockport Valley Airport"},
];

export const NFS_MW_CITY_DISTRICTS_TREE = {
  id: 1,
  pid: 0,
  name: "Rockport City",
  children: [
    {
      id: 2,
      pid: 1,
      name: "Rosewood",
      children: [
        {id: 5, pid: 2, name: "Downtown Rosewood", children: []},
        {id: 6, pid: 2, name: "Heritage Heights", children: []},
        {id: 7, pid: 2, name: "Petersburg", children: []},
        {id: 8, pid: 2, name: "Rosewood College Campus", children: []},
        {id: 9, pid: 2, name: "Highlander Stadium", children: []},
        {id: 10, pid: 2, name: "Hickley Field", children: []},
        {id: 11, pid: 2, name: "Highway 99", children: []},
      ]
    },
    {
      id: 3,
      pid: 1,
      name: "Kadmen Beach",
      children: [
        {id: 12, pid: 3, name: "North Gray Point", children: []},
        {id: 13, pid: 3, name: "Ocean Hills", children: []},
        {id: 14, pid: 3, name: "Point Camden", children: []},
      ]
    },
    {
      id: 4,
      pid: 1,
      name: "Downtown Rockport",
      children: [
        {id: 15, pid: 4, name: "Agostini Heights", children: []},
        {id: 16, pid: 4, name: "Century Square", children: []},
        {id: 17, pid: 4, name: "Riverfront Stadium", children: []},
        {id: 18, pid: 4, name: "Rockport Valley Airport", children: []},
      ]
    },
  ]
};
