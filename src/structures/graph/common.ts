import type { OrdComparator } from "../common.types";

export const defaultComparator: OrdComparator<unknown> = <T>(a: T, b: T) =>
  a > b ? "GT" : b > a ? "LT" : "EQ";
