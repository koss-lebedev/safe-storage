export interface IStorage {
  getItem(key: string): any;
  setItem(key: string, item: any): void;
  removeItem(key: string): void;
  length: number;
}
