# Nullable Quantifier 

[![npm](https://img.shields.io/npm/v/nullable-quantifier.svg)](https://www.npmjs.com/package/nullable-quantifier)
[![License](https://img.shields.io/npm/l/nullable-quantifier.svg)](https://www.npmjs.com/package/nullable-quantifier)

Existential quantifier and Universal quantifier of nullable types (like as some/every of Array.prototype)

## Installation

```
npm install nullable-quantifier
```

## Usage

```typescript
import { some, every } from 'nullable-quantifier';

const nullableValue1: string | null | undefined = 'Hello World';
const nullableValue2: string | null | undefined = null;

some(nullableValue1, (s) => s.startsWith('Hello')); // true
some(nullableValue2, (s) => s.startsWith('Hello')); // false

every(nullableValue1, (s) => s.includes('foo')); // false
every(nullableValue2, (s) => s.includes('foo')); // true 
```

The `some` function accepts a nullable value and a predicate. 
If the value is `null` or `undefined`, `some` returns false always, 
otherwise `some` tests whether passes the provided predicate.

The `every` function accepts a nullable value and a predicate. 
If the value is `null` or `undefined`, `every` returns true always, 
otherwise `every` tests whether passes the provided predicate.

### Signature

```typescript
const some  = <A>(a: A | null | undefined, p: (_: A) => boolean): boolean
const every = <A>(a: A | null | undefined, p: (_: A) => boolean): boolean
```

### Usecase1. validate optional values

```typescript
import { every } from 'nullable-quantifier';

type UserForm = {
    name: string;
    nickname?: string;
}

function validateUserForm(form: UserForm): boolean {
    // Check that `name` is always non-empty.
    // Check that `nickname` is not empty if and only if it is specified.
    return nonEmpty(form.name) && every(form.nickname, nonEmpty);
}

const nonEmpty = (s: string): boolean => s.length > 0;
```

## Alias

The aliases `exists` for `some` and `forall` for `every` are defined.

```typescript
import { exists, forall } from 'nullable-quantifier';

const nullableValue1: string | null | undefined = 'Hello World';
const nullableValue2: string | null | undefined = null;

exists(nullableValue1, (s) => s.startsWith('Hello')); // true
exists(nullableValue2, (s) => s.startsWith('Hello')); // false

forall(nullableValue1, (s) => s.includes('foo')); // false
forall(nullableValue2, (s) => s.includes('foo')); // true 
```
