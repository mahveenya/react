export const isEmptyArray = (array: unknown) =>
  Array.isArray(array) && array.length == 0;

export const getEndOfUrlPath = (url: string) =>
  url.split('/').filter(Boolean).at(-1);

export const toArray = <T>(input: T) => {
  if (!input) return [];
  return Array.isArray(input) ? input : [input];
};
