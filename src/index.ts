export const some = <A>(a: A | null | undefined, p: (_: A) => boolean): boolean => 
    a !== null && a !== undefined && p(a);

export const every = <A>(a: A | null | undefined, p: (_: A) => boolean): boolean => 
    a === null || a === undefined || p(a);

export const exists = some;

export const forall = every;
