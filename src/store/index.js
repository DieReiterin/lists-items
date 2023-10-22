import { defineStore } from 'pinia'
export const storeManager = defineStore({
    id:'storeManager',
    state:()=> ({
        lists: {},
    }),
  })