type Some<T> = T;
type None = null;
export type Nullable<T> = Some<T> | None;
