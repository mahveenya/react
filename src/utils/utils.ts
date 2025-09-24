export const isEmptyArray = (array: unknown) =>
  Array.isArray(array) && array.length == 0;

export function toArray<T>(input: T | T[]): T[] {
  if (!input) return [];
  return Array.isArray(input) ? input : [input];
}
