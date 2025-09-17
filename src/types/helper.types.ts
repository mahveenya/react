export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type Validator<T> = (value: unknown) => value is T;
