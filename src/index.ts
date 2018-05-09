import inMemoryStorage from './inMemoryStorage'
import isStorageAvailable from './isStorageAvailable'

import { IStorage } from './types'

const safeLocalStorage = 
  isStorageAvailable('localStorage') ? 
    window.localStorage :
    inMemoryStorage

const safeSessionStorage = 
  isStorageAvailable('sessionStorage') ? 
    window.sessionStorage : 
    inMemoryStorage

export {
  safeLocalStorage,
  safeSessionStorage,
}
