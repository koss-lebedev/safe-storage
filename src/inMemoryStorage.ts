import { IStorage } from "./types";

const cache: any = {};

const inMemoryStorage: IStorage = {

  getItem(key) {
    return cache[key];
  },

  setItem(key, value) {
    cache[key] = value;
  },

  removeItem(key) {
    delete cache[key];
  },

  length: Object.keys(cache).length,
};

export default inMemoryStorage;
