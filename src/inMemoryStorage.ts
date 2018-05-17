import { IStorage } from "./types";

const cache: any = {};

const inMemoryStorage: IStorage = {

  getItem(key: string) {
    return cache[key];
  },

  setItem(key: string, value: any) {
    cache[key] = value;
  },

  removeItem(key: string) {
    delete cache[key];
  },

  clear() {
    Object.keys(cache).forEach(this.removeItem);
  },

  key(idx: number) {
    const key = Object.keys(cache)[idx];
    return cache[key];
  },

  length: Object.keys(cache).length,
};

export default inMemoryStorage;
