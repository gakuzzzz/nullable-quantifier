export const some = <A>(a: A | null | undefined, p: (_: A) => boolean): boolean => 
    a === null || a === undefined ? false : p(a);

export const every = <A>(a: A | null | undefined, p: (_: A) => boolean): boolean => 
    a === null || a === undefined ? true : p(a);

export const exists = some;

export const forall = every;
