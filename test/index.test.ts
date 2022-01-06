import { some, every, exists, forall } from '../src';

describe('some', (): void => {
    test('should be false always at null value.', (): void => {
        const result = some(null, () => true);
        expect(result).toBeFalsy();
    });

    test('should be false always at undefined value.', (): void => {
        const result = some(undefined, () => true);
        expect(result).toBeFalsy();
    });

    test('should evaluate a predicate at empty string.', (): void => {
        const result = some('', () => true);
        expect(result).toBeTruthy();
    });

    test('should evaluate a predicate at zero.', (): void => {
        const result = some(0, (a) => a > -1);
        expect(result).toBeTruthy();
    });
});

describe('every', (): void => {
    test('should be true always at null value.', (): void => {
        const result = every(null, () => false);
        expect(result).toBeTruthy();
    });

    test('should be true always at undefined value.', (): void => {
        const result = every(undefined, () => true);
        expect(result).toBeTruthy();
    });

    test('should evaluate a predicate at empty string.', (): void => {
        const result = every('', () => false);
        expect(result).toBeFalsy();
    });

    test('should evaluate a predicate at zero.', (): void => {
        const result = every(0, (a) => a > 0);
        expect(result).toBeFalsy();
    });
});

describe('exists', (): void => {
    test('should be false always at null value.', (): void => {
        const result = exists(null, () => true);
        expect(result).toBeFalsy();
    });

    test('should be false always at undefined value.', (): void => {
        const result = exists(undefined, () => true);
        expect(result).toBeFalsy();
    });

    test('should evaluate a predicate at empty string.', (): void => {
        const result = exists('', () => true);
        expect(result).toBeTruthy();
    });

    test('should evaluate a predicate at zero.', (): void => {
        const result = exists(0, (a) => a > -1);
        expect(result).toBeTruthy();
    });
});

describe('forall', (): void => {
    test('should be true always at null value.', (): void => {
        const result = forall(null, () => false);
        expect(result).toBeTruthy();
    });

    test('should be true always at undefined value.', (): void => {
        const result = forall(undefined, () => true);
        expect(result).toBeTruthy();
    });

    test('should evaluate a predicate at empty string.', (): void => {
        const result = forall('', () => false);
        expect(result).toBeFalsy();
    });

    test('should evaluate a predicate at zero.', (): void => {
        const result = forall(0, (a) => a > 0);
        expect(result).toBeFalsy();
    });
});
