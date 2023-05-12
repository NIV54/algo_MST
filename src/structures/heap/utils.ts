export const parentIdx = (x: number) => {
  return (x - 1) >> 1;
};

export const leftIdx = (x: number) => {
  return (x << 1) + 1;
};

export const rightIdx = (x: number) => {
  return (x << 1) + 2;
};

export const swap = <T>(idx1: number, idx2: number, arr: T[]) => {
  const tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
};
