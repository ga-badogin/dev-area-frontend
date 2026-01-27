export type TKeyWithParams<T> = {
  [K in keyof T]: T[K] extends null ? [K] : [K, T[K]]
}[keyof T]

export type ValueOf<T> = T[keyof T]

export type MaybeArray<T> = T | T[]
