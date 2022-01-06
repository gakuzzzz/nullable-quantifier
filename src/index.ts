export function some<A>(a: A | null | undefined, p: (_: A) => boolean): boolean {
    return a === null || a === undefined ? false : p(a);
}

export function every<A>(a: A | null | undefined, p: (_: A) => boolean): boolean {
    return a === null || a === undefined ? true : p(a);
}

export const exists = some;

export const forall = every;
