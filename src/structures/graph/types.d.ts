export type Comparator<T> = (a: T, b: T) => boolean;

export type GraphNodes<T> = Map<T, GraphNode<T>>;
