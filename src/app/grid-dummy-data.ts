import { ISortingExpression } from "igniteui-angular";

export const gridDummyData = [
  { first: "Chad", last: "Powers" },
  { first: "Ivan", last: "Lees" },
  { first: "Wil", last: "Bernal" },
  { first: "Tim", last: "Mcmanus" },
  { first: "Damon", last: "Burris" }
];

export const initialSortingExpression: ISortingExpression[] = [
  {
    fieldName: "first",
    dir: 1,
    ignoreCase: true
  }
];
