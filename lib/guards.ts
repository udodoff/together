export const isValueSet = <T>(value?: T | null): value is T =>
  value !== null && value !== undefined;

export const isNotEmpty = <T extends string | Array<unknown>>(
  value?: T | null,
): value is T => isValueSet<T>(value) && value.length > 0;

export const isString = (value: unknown): value is string =>
  typeof value === 'string';
export const isUndefined = (value: unknown): value is undefined =>
  typeof value === 'undefined';
export const isEmptyString = (value: unknown): boolean =>
  isString(value) && value.length === 0;
