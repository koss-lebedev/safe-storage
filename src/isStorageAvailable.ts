import { IStorage } from "./types";

// Approach for checking storage availability recommended by Mozilla:
// tslint:disable-next-line
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Feature-detecting_localStorage

const storageAvailable = (type: string) => {
  if (typeof window === "undefined") {
    return false;
  }
  const storage: IStorage = (window as any)[type];
  try {
    const testItem = "__storage_test__";
    storage.setItem(testItem, testItem);
    storage.removeItem(testItem);
    return true;
  } catch (exception) {
    return (
      exception instanceof DOMException &&
      (exception.code === 22 ||
        exception.code === 1014 ||
        exception.name === "QuotaExceededError" ||
        exception.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      storage.length !== 0
    );
  }
};

export default storageAvailable;
