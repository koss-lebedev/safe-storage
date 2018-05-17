export interface IStorage {
  length: number;
  getItem(key: string): any;
  setItem(key: string, item: any): void;
  removeItem(key: string): void;
  clear(): void;
  key(idx: number): any;
}
