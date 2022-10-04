type Some<T> = T;
type None = null;
type Nothing = null | undefined;

export type Option<T> = Some<T> | None;
export type Maybe<T> = Some<T> | Nothing;
