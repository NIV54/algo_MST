import { Comparator } from "./types";

export const defaultComparator: Comparator<unknown> = <T>(a: T, b: T) => a === b;
