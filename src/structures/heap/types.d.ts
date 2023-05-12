type Ordering = "LT" | "EQ" | "GT";

export type OrdComparator<T> = (x: T, y: T) => Ordering;
