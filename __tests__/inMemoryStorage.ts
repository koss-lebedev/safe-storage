import inMemoryStorage from "../src/inMemoryStorage";

const KEY = "__test_key__";
const VAL = "__test_val__";

describe("inMemoryStorage", () => {
  it("sets and gets item", () => {
    inMemoryStorage.setItem(KEY, VAL);
    const value = inMemoryStorage.getItem(KEY);
    expect(value).toEqual(VAL);
  });

  it("returns correct length", () => {
    expect(inMemoryStorage.length).toEqual(0);
    inMemoryStorage.setItem(KEY, VAL);
    expect(inMemoryStorage.length).toEqual(1);
  });
});
