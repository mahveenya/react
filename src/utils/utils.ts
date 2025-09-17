export const isEmptyArray = (array: unknown) =>
  Array.isArray(array) && array.length == 0;

export const getEndOfUrlPath = (url: string) =>
  url.split('/').filter(Boolean).at(-1);
