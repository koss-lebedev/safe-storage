import inMemoryStorage from "./inMemoryStorage";
import isStorageAvailable from "./isStorageAvailable";

import { IStorage } from "./types";

const safeLocalStorage: IStorage =
  isStorageAvailable("localStorage") ?
    window.localStorage :
    inMemoryStorage;

const safeSessionStorage: IStorage =
  isStorageAvailable("sessionStorage") ?
    window.sessionStorage :
    inMemoryStorage;

export {
  safeLocalStorage,
  safeSessionStorage,
};
