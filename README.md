# Safe storage

[![Maintainability](https://api.codeclimate.com/v1/badges/bce6ec1e42dc0f983ec3/maintainability)](https://codeclimate.com/github/koss-lebedev/safe-storage/maintainability)

[![npm version](https://badge.fury.io/js/safe-storage.svg)](https://badge.fury.io/js/safe-storage)

[![Test Coverage](https://api.codeclimate.com/v1/badges/bce6ec1e42dc0f983ec3/test_coverage)](https://codeclimate.com/github/koss-lebedev/safe-storage/test_coverage)

Safe implementations for localStorage and sessionStorage, which fallbacks to in-memory implementation if default browser implementations aren't available. For example, when in private mode in Safari, storages are available, but an attempt to write to them throws an error.

## Installation

    npm i -S safe-storage

## Usage

`safe-storage` has the same signature as localStorage and sessionStorage, so you can use it as you would use normal localStorage or sessionStorage. Example:

```js
import { safeLocalStorage } from 'safe-storage';

safeLocalStorage.setItem('token', '<123456789>');

console.log(safeLocalStorage.getItem('token'));
// output: <123456789>

console.log(safeLocalStorage.length);
// output: 1 

safeLocalStorage.removeItem('token');

console.log(safeLocalStorage.getItem('token'));
// output: null

```

For sessionStorage:

```js
import { safeSessionStorage } from 'safe-storage';
```
